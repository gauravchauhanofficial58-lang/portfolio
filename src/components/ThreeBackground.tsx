"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface ThreeBackgroundProps {
  motionEnabled?: boolean;
}

/**
 * ThreeBackground — Signature Neon Green & Cinematic 3D WebGL Environment
 *
 * Visual Systems:
 * 1. Flowing Neon Green 3D Light Ribbon: Animated curve weaving dynamically through space
 * 2. Neon & Emerald Celestial Particle Constellation: Electric green & lime dust particles
 * 3. Geodesic Orbital Armature: Faceted emerald icosahedron and neon kinetic rings
 * 4. Interactive Mouse Spring Physics & Scroll-Driven Camera Motion
 * 5. Adaptive Mobile Optimization & 100% GPU Resource Cleanup
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
    scene.fog = new THREE.FogExp2(0x030503, 0.0018);

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
    renderer.setClearColor(0x030503, 0);

    container.appendChild(renderer.domElement);

    // 3. Neon & Emerald Particle Constellation
    const particleCount = isMobile ? 220 : 650;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorNeon = new THREE.Color("#39FF14");
    const colorLime = new THREE.Color("#75FF36");
    const colorEmerald = new THREE.Color("#092313");
    const colorWhite = new THREE.Color("#F1F5EF");

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 175;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 135;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 125;

      const seed = Math.random();
      let c = colorEmerald;
      if (seed > 0.82) {
        c = colorNeon;
      } else if (seed > 0.6) {
        c = colorLime;
      } else if (seed > 0.35) {
        c = colorWhite;
      }

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      sizes[i] = Math.random() * (isMobile ? 1.5 : 2.2) + 0.8;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    particleGeo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 1.2 : 1.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMaterial);
    scene.add(particles);

    // 4. Flowing Neon Green 3D Light Ribbon (Smooth Spline Curve)
    const curvePoints: THREE.Vector3[] = [];
    const ribbonSegments = 16;
    for (let i = 0; i < ribbonSegments; i++) {
      const theta = (i / ribbonSegments) * Math.PI * 2;
      const x = Math.sin(theta) * 38;
      const y = Math.cos(theta * 2) * 16;
      const z = Math.sin(theta * 3) * 22 - 15;
      curvePoints.push(new THREE.Vector3(x, y, z));
    }
    const ribbonCurve = new THREE.CatmullRomCurve3(curvePoints, true);
    const ribbonGeo = new THREE.TubeGeometry(ribbonCurve, isMobile ? 48 : 96, isMobile ? 0.25 : 0.4, 8, true);
    const ribbonMat = new THREE.MeshBasicMaterial({
      color: 0x39FF14,
      transparent: true,
      opacity: 0.32,
      wireframe: true,
      blending: THREE.AdditiveBlending,
    });
    const ribbonMesh = new THREE.Mesh(ribbonGeo, ribbonMat);
    scene.add(ribbonMesh);

    // 5. Procedural Kinetic Armature: Orbital Rings & Core Sculpture
    const armatureGroup = new THREE.Group();
    armatureGroup.position.set(0, 0, -20);

    // Ring 1: Primary Outer Orbit in Deep Emerald
    const ringGeo1 = new THREE.TorusGeometry(32, 0.12, isMobile ? 8 : 16, isMobile ? 48 : 96);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x092313,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    armatureGroup.add(ring1);

    // Ring 2: Radiant Electric Neon Green Accent Orbit
    const ringGeo2 = new THREE.TorusGeometry(26, 0.09, isMobile ? 8 : 16, isMobile ? 40 : 80);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x39FF14,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    armatureGroup.add(ring2);

    // Core: Geodesic Icosahedron with Subtle Specular Lime Sheen
    const coreGeo = new THREE.IcosahedronGeometry(11, isMobile ? 0 : 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x183B20,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    armatureGroup.add(core);

    scene.add(armatureGroup);

    // 6. Interactive Mouse & Scroll State Tracking
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

    // 7. Responsive Viewport Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // 8. Kinetic Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      if (!motionEnabled) {
        renderer.render(scene, camera);
        return;
      }

      animationFrameId = requestAnimationFrame(animate);

      if (document.hidden) return;

      const elapsed = (performance.now() - startTime) * 0.001;

      // Smooth spring interpolation for mouse movement
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Rotate particle constellation
      particles.rotation.y = elapsed * 0.03 + currentMouseX * 0.08;
      particles.rotation.x = elapsed * 0.015 - currentMouseY * 0.06;

      // Animate flowing neon light ribbon
      ribbonMesh.rotation.z = elapsed * 0.08;
      ribbonMesh.rotation.y = elapsed * 0.05 + currentMouseX * 0.12;
      ribbonMesh.position.y = Math.sin(elapsed * 0.6) * 3;

      // Rotate armature rings & core
      ring1.rotation.z = elapsed * 0.06;
      ring2.rotation.x = elapsed * -0.09;
      core.rotation.y = elapsed * 0.12;
      core.rotation.x = elapsed * 0.07;

      armatureGroup.position.x = currentMouseX * 4;
      armatureGroup.position.y = currentMouseY * -3;

      // Scroll-driven camera parallax
      camera.position.z = 75 - scrollProgress * 18;
      camera.position.y = -scrollProgress * 24 + currentMouseY * -2;
      camera.position.x = currentMouseX * 3.5;
      camera.lookAt(0, -scrollProgress * 12, 0);

      renderer.render(scene, camera);
    };

    animate();

    // 9. Thorough GPU Resource Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      particleGeo.dispose();
      particleMaterial.dispose();
      ribbonGeo.dispose();
      ribbonMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      coreGeo.dispose();
      coreMat.dispose();

      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [motionEnabled]);

  if (!hasWebGL) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: motionEnabled ? 0.9 : 0.4, transition: "opacity 0.6s ease" }}
      aria-hidden="true"
    />
  );
}
