"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface ThreeBackgroundProps {
  motionEnabled?: boolean;
}

export default function ThreeBackground({ motionEnabled = true }: ThreeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check WebGL availability
    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);

    // 1. Particle Cloud
    const particleCount = 650;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorOrange = new THREE.Color("#FF8752");
    const colorWhite = new THREE.Color("#F2EEE8");
    const colorMuted = new THREE.Color("#4A4642");

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 120;

      const choice = Math.random();
      let c = colorMuted;
      if (choice > 0.85) {
        c = colorOrange;
      } else if (choice > 0.45) {
        c = colorWhite;
      }

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      sizes[i] = Math.random() * 2.2 + 0.8;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    // Particle Material
    const particleMaterial = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // 2. Minimalist Geodesic Wireframe Ring (Subtle futuristic depth sculpture)
    const ringGroup = new THREE.Group();
    ringGroup.position.set(0, 0, -25);

    const ringGeometry1 = new THREE.TorusGeometry(32, 0.12, 16, 100);
    const ringMaterial1 = new THREE.MeshBasicMaterial({
      color: 0x222222,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const ring1 = new THREE.Mesh(ringGeometry1, ringMaterial1);
    ring1.rotation.x = Math.PI / 3;
    ringGroup.add(ring1);

    const ringGeometry2 = new THREE.TorusGeometry(26, 0.1, 16, 80);
    const ringMaterial2 = new THREE.MeshBasicMaterial({
      color: 0xff8752,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const ring2 = new THREE.Mesh(ringGeometry2, ringMaterial2);
    ring2.rotation.y = Math.PI / 4;
    ringGroup.add(ring2);

    const ringGeometry3 = new THREE.IcosahedronGeometry(12, 1);
    const ringMaterial3 = new THREE.MeshBasicMaterial({
      color: 0x333333,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const core = new THREE.Mesh(ringGeometry3, ringMaterial3);
    ringGroup.add(core);

    scene.add(ringGroup);

    // Mouse Tracking for Parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Scroll tracking
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Resize Observer
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (document.hidden) return; // Pause when tab inactive

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth mouse interpolation
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      if (motionEnabled) {
        // Subtle particle rotation
        particles.rotation.y = elapsedTime * 0.025 + currentMouseX * 0.15;
        particles.rotation.x = elapsedTime * 0.015 - currentMouseY * 0.15;

        // Wave motion on particles
        const posAttr = geometry.attributes.position;
        const array = posAttr.array as Float32Array;
        for (let i = 0; i < particleCount; i += 4) {
          const y = array[i * 3 + 1];
          array[i * 3 + 2] += Math.sin(elapsedTime * 0.8 + y * 0.05) * 0.04;
        }
        posAttr.needsUpdate = true;

        // Rotate wireframe rings
        ring1.rotation.z = elapsedTime * 0.06;
        ring2.rotation.x = elapsedTime * 0.04;
        core.rotation.y = elapsedTime * 0.08;
        ringGroup.rotation.y = currentMouseX * 0.25;
        ringGroup.rotation.x = -currentMouseY * 0.25;

        // Scroll influence
        ringGroup.position.y = -scrollY * 0.015;
      }

      // Camera parallax
      camera.position.x = currentMouseX * 4;
      camera.position.y = -currentMouseY * 4;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      ringGeometry1.dispose();
      ringGeometry2.dispose();
      ringGeometry3.dispose();
      ringMaterial1.dispose();
      ringMaterial2.dispose();
      ringMaterial3.dispose();
      renderer.dispose();
    };
  }, [motionEnabled]);

  if (!hasWebGL) {
    return (
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 35%, rgba(255,135,82,0.12) 0%, transparent 70%)"
        }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    />
  );
}
