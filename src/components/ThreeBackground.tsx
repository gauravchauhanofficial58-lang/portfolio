"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface ThreeBackgroundProps {
  motionEnabled?: boolean;
}

/**
 * ThreeBackground — Signature Interactive 3D WebGL Environment
 *
 * Features:
 * - Dynamic Celestial Particle Field with additive depth blending
 * - Procedural Orbital Wireframe Rings & Icosahedron Core Sculpture
 * - Interactive Mouse Physics with smooth spring interpolation
 * - Scroll-Linked Camera Orbit through space
 * - Adaptive Mobile Performance (lowered geometry complexity for 60fps)
 * - Complete GPU disposal on unmount or FX OFF
 */
export default function ThreeBackground({ motionEnabled = true }: ThreeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // 1. WebGL Support Verification
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

    const isMobile = window.innerWidth < 768;

    // 2. Three.js Scene, Camera & Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.0016);

    const camera = new THREE.PerspectiveCamera(
      52,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 75);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.75));
    renderer.setClearColor(0x050505, 0);

    container.appendChild(renderer.domElement);

    // 3. Celestial Particle Constellation
    const particleCount = isMobile ? 220 : 680;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorOrange = new THREE.Color("#FF8050");
    const colorWhite = new THREE.Color("#F2EEE7");
    const colorMuted = new THREE.Color("#3A3733");

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 170;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 130;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 120;

      const seed = Math.random();
      let c = colorMuted;
      if (seed > 0.86) {
        c = colorOrange;
      } else if (seed > 0.45) {
        c = colorWhite;
      }

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      sizes[i] = Math.random() * (isMobile ? 1.6 : 2.2) + 0.8;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 1.2 : 1.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // 4. Procedural Kinetic Armature: Orbital Rings & Core Sculpture
    const armatureGroup = new THREE.Group();
    armatureGroup.position.set(0, 0, -22);

    // Ring 1: Primary Outer Orbit
    const ringGeo1 = new THREE.TorusGeometry(32, 0.12, isMobile ? 8 : 16, isMobile ? 48 : 96);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x242424,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    armatureGroup.add(ring1);

    // Ring 2: Radiant Orange Accent Orbit
    const ringGeo2 = new THREE.TorusGeometry(25, 0.09, isMobile ? 8 : 16, isMobile ? 40 : 80);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xff8050,
      wireframe: true,
      transparent: true,
      opacity: 0.24,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    armatureGroup.add(ring2);

    // Core: Geodesic Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(11, isMobile ? 0 : 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x363330,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    armatureGroup.add(core);

    scene.add(armatureGroup);

    // 5. Interactive Mouse & Scroll State Tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / innerHeight - 0.5) * 2;
    };

    let scrollProgress = 0;
    const handleScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      scrollProgress = window.scrollY / maxScroll;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 6. Responsive Viewport Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // 7. Kinetic Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      if (!motionEnabled) {
        // When FX is disabled, render static frame once and avoid continuous loop
        renderer.render(scene, camera);
        return;
      }

      animationFrameId = requestAnimationFrame(animate);

      if (document.hidden) return; // Freeze when tab is backgrounded

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Spring mouse interpolation
      currentMouseX += (targetMouseX - currentMouseX) * 0.035;
      currentMouseY += (targetMouseY - currentMouseY) * 0.035;

      // Celestial particle drift & gentle harmonic wave
      particles.rotation.y = elapsedTime * 0.02 + currentMouseX * 0.12;
      particles.rotation.x = elapsedTime * 0.012 - currentMouseY * 0.12;

      // Armature kinetic rotations
      ring1.rotation.z = elapsedTime * 0.05;
      ring2.rotation.x = elapsedTime * 0.035;
      core.rotation.y = elapsedTime * 0.07;
      armatureGroup.rotation.y = currentMouseX * 0.22;
      armatureGroup.rotation.x = -currentMouseY * 0.22;

      // Scroll-connected camera flight along Z and Y
      armatureGroup.position.y = -scrollProgress * 28;
      camera.position.x = currentMouseX * 5;
      camera.position.y = -currentMouseY * 4 - scrollProgress * 10;
      camera.position.z = 75 - scrollProgress * 15;
      camera.lookAt(0, -scrollProgress * 10, 0);

      renderer.render(scene, camera);
    };

    animate();

    // 8. Complete Resource Disposal on Unmount
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
      ringGeo1.dispose();
      ringGeo2.dispose();
      coreGeo.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      coreMat.dispose();
      renderer.dispose();
    };
  }, [motionEnabled]);

  if (!hasWebGL) {
    return (
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 35%, rgba(255,128,80,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
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
