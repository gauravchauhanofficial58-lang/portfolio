"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Laptop, Smartphone, Terminal, Activity, Cpu, Sparkles, ArrowRight } from "lucide-react";
import { useSmoothScroll } from "./SmoothScroll";

export default function Workspace3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [lidAngle, setLidAngle] = useState(15); // initial tilt
  const { scrollTo } = useSmoothScroll();

  // Three.js interactive neural orb inside the laptop display
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      100
    );
    camera.position.z = 18;

    // 1. Neural Wireframe Sphere (Latitude Rings + Points)
    const orbGroup = new THREE.Group();
    scene.add(orbGroup);

    const sphereGeo = new THREE.IcosahedronGeometry(6, 2);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x39ff14,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    orbGroup.add(sphereMesh);

    // Glowing vertex points
    const pointsMat = new THREE.PointsMaterial({
      color: 0x75ff36,
      size: 0.35,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const pointsMesh = new THREE.Points(sphereGeo, pointsMat);
    orbGroup.add(pointsMesh);

    // Dynamic equatorial rings
    const ringGeo1 = new THREE.RingGeometry(8, 8.1, 48);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x39ff14,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.3;
    orbGroup.add(ring1);

    const ringGeo2 = new THREE.RingGeometry(6.8, 6.9, 48);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x092313,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 3;
    orbGroup.add(ring2);

    let animId: number;
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = (performance.now() - startTime) * 0.001;

      orbGroup.rotation.y = elapsed * 0.4 + mousePos.x * 0.5;
      orbGroup.rotation.x = elapsed * 0.2 + mousePos.y * 0.3;
      ring1.rotation.z = elapsed * 0.3;
      ring2.rotation.z = -elapsed * 0.25;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      sphereGeo.dispose();
      sphereMat.dispose();
      pointsMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      renderer.dispose();
    };
  }, [mousePos]);

  // Handle 3D perspective mouse tilt & scroll detection
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.top < windowH && rect.bottom > 0) {
        const progress = Math.min(Math.max((windowH - rect.top) / (windowH * 1.2), 0), 1);
        setLidAngle(Math.min(progress * 20, 20)); // smooth subtle open angle
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="workspace"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 md:py-36 px-4 sm:px-6 md:px-12 bg-[#030503] border-t border-[#39FF14]/15 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 -z-10"
        style={{
          top: "30%",
          right: "15%",
          background: "radial-gradient(circle, rgba(57,255,20,0.3) 0%, rgba(9,35,19,0.1) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-16">
        {/* Section Top Header & Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-[#39FF14]/15 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14] animate-pulse" />
            <span className="font-editorial-mono text-xs uppercase tracking-[0.22em] text-[#39FF14]">
              3D COMPUTATIONAL ENVIRONMENT
            </span>
          </div>

          {/* Interactive Device Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#07150B] border border-[#39FF14]/20 self-start sm:self-auto">
            <button
              onClick={() => setDeviceMode("desktop")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-editorial-mono tracking-wider transition-all duration-300 ${
                deviceMode === "desktop"
                  ? "bg-[#39FF14] text-[#030503] font-semibold shadow-[0_0_12px_rgba(57,255,20,0.4)]"
                  : "text-[#929B91] hover:text-[#F1F5EF]"
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setDeviceMode("mobile")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-editorial-mono tracking-wider transition-all duration-300 ${
                deviceMode === "mobile"
                  ? "bg-[#39FF14] text-[#030503] font-semibold shadow-[0_0_12px_rgba(57,255,20,0.4)]"
                  : "text-[#929B91] hover:text-[#F1F5EF]"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>
        </div>

        {/* Dual Column Layout: Left Editorial Story + Right 3D Workstation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative & Metrics */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07150B] border border-[#39FF14]/25 w-fit">
              <Terminal className="w-3.5 h-3.5 text-[#39FF14]" />
              <span className="text-xs font-editorial-mono tracking-wider text-[#75FF36]">
                GAURAV AI WORKSTATION v2.8
              </span>
            </div>

            <h2 className="font-editorial-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F1F5EF] leading-[1.12]">
              Your voice. <br />
              <span className="text-[#39FF14] drop-shadow-[0_0_20px_rgba(57,255,20,0.35)]">
                Your workspace.
              </span>
            </h2>

            <p className="text-sm sm:text-base font-sans text-[#929B91] font-light leading-relaxed">
              Engineering intelligent digital systems at the intersection of Python architecture,
              autonomous agent cognition, and spatial 3D interfaces. Designed to transform raw
              curiosity into working computational reality.
            </p>

            {/* Quick Metrics Console */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#07150B]/80 border border-[#39FF14]/15">
                <span className="text-[10px] font-editorial-mono tracking-wider text-[#929B91] uppercase block">
                  NEURAL LATENCY
                </span>
                <span className="text-lg font-editorial-mono text-[#39FF14] font-semibold mt-1 block">
                  12.4 ms
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#07150B]/80 border border-[#39FF14]/15">
                <span className="text-[10px] font-editorial-mono tracking-wider text-[#929B91] uppercase block">
                  SYSTEM CORE
                </span>
                <span className="text-lg font-editorial-mono text-[#75FF36] font-semibold mt-1 block">
                  Autonomous
                </span>
              </div>
            </div>

            <button
              onClick={() => scrollTo("#work")}
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-[#39FF14] text-[#030503] font-editorial-mono text-xs uppercase tracking-wider font-semibold hover:shadow-[0_0_25px_rgba(57,255,20,0.6)] transition-all duration-300 w-fit mt-2"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Column: 3D Laptop / Mobile Visual Workstation */}
          <div className="lg:col-span-7 flex justify-center items-center">
            {deviceMode === "desktop" ? (
              /* 3D Metallic Laptop Console */
              <div
                className="relative w-full max-w-[620px] transition-transform duration-500 ease-out"
                style={{
                  perspective: "1200px",
                  transform: `rotateX(${mousePos.y * -8}deg) rotateY(${mousePos.x * 12}deg)`,
                }}
              >
                {/* Laptop Lid Screen */}
                <div
                  className="relative w-full aspect-[16/10] rounded-2xl bg-[#050805] border-2 border-[#39FF14]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(57,255,20,0.15)] overflow-hidden flex flex-col transition-all duration-700"
                  style={{
                    transformOrigin: "bottom center",
                  }}
                >
                  {/* Laptop Top Bezel with Camera */}
                  <div className="w-full h-8 bg-[#07150B] border-b border-[#39FF14]/15 flex items-center justify-between px-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    </div>
                    <span className="text-[10px] font-editorial-mono tracking-widest text-[#929B91]">
                      gaurav-workspace-v2.8.sh
                    </span>
                    <div className="w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_6px_#39FF14]" />
                  </div>

                  {/* Laptop Screen Inner Interface: 3D Canvas + Telemetry HUD */}
                  <div className="flex-1 grid grid-cols-12 relative overflow-hidden bg-[#030503]">
                    {/* Left HUD: Hardware Meters */}
                    <div className="col-span-4 p-3.5 border-r border-[#39FF14]/15 flex flex-col justify-between bg-[#07150B]/60">
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-1.5 text-[10px] font-editorial-mono text-[#39FF14]">
                          <Cpu className="w-3 h-3" />
                          <span>NEURAL CORES</span>
                        </div>
                        <div>
                          <div className="flex justify-between text-[9px] font-editorial-mono text-[#929B91] mb-1">
                            <span>CPU LOAD</span>
                            <span className="text-[#39FF14]">28%</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                            <div className="w-[28%] h-full bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[9px] font-editorial-mono text-[#929B91] mb-1">
                            <span>VRAM ALLOC</span>
                            <span className="text-[#75FF36]">4.2 GB</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                            <div className="w-[45%] h-full bg-[#75FF36] rounded-full shadow-[0_0_8px_#75FF36]" />
                          </div>
                        </div>
                      </div>

                      <div className="p-2 rounded-lg bg-[#030503] border border-[#39FF14]/15">
                        <div className="flex items-center gap-1.5 text-[9px] font-editorial-mono text-[#39FF14] mb-1">
                          <Activity className="w-2.5 h-2.5 animate-pulse" />
                          <span>SYNAPSE STREAM</span>
                        </div>
                        <p className="text-[8px] font-editorial-mono text-[#929B91] leading-tight">
                          Agent loop active: 1,420 tokens/sec
                        </p>
                      </div>
                    </div>

                    {/* Center: Live Three.js Neural Sphere */}
                    <div className="col-span-8 relative flex items-center justify-center p-2">
                      <canvas
                        ref={canvasRef}
                        className="w-full h-full object-contain cursor-grab active:cursor-grabbing"
                        style={{ minHeight: "220px" }}
                      />
                      {/* Floating prompt chip */}
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-[#07150B]/90 border border-[#39FF14]/30 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                        <Sparkles className="w-3 h-3 text-[#39FF14]" />
                        <span className="text-[9px] font-editorial-mono text-[#F1F5EF]">
                          Orchestrating agents...
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Base Keyboard Deck */}
                <div className="relative w-[108%] -left-[4%] h-5 bg-gradient-to-b from-[#183B20]/40 to-[#07150B] rounded-b-2xl border-t border-white/10 shadow-2xl flex justify-center items-center">
                  <div className="w-20 h-1 bg-[#39FF14]/30 rounded-full" />
                </div>
              </div>
            ) : (
              /* Mobile Phone Alternative */
              <div
                className="relative w-[280px] aspect-[9/18] rounded-[36px] bg-[#050805] border-4 border-[#39FF14]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(57,255,20,0.2)] p-3 flex flex-col justify-between overflow-hidden transition-transform duration-500"
                style={{
                  perspective: "1000px",
                  transform: `rotateY(${mousePos.x * 15}deg) rotateX(${mousePos.y * -10}deg)`,
                }}
              >
                {/* Dynamic Island */}
                <div className="w-24 h-4 bg-[#07150B] rounded-full mx-auto flex items-center justify-center mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
                </div>

                {/* Mobile Screen Content */}
                <div className="flex-1 flex flex-col justify-center items-center text-center px-4 gap-4">
                  <div className="w-20 h-20 rounded-full bg-[#07150B] border border-[#39FF14]/40 flex items-center justify-center shadow-[0_0_20px_rgba(57,255,20,0.3)]">
                    <Activity className="w-8 h-8 text-[#39FF14] animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-editorial-serif text-xl text-[#F1F5EF] font-medium">
                      Mobile Telemetry
                    </h3>
                    <p className="text-[11px] font-sans text-[#929B91] mt-1">
                      Real-time agent telemetry on the go.
                    </p>
                  </div>
                  <div className="w-full p-2.5 rounded-xl bg-[#07150B] border border-[#39FF14]/20 text-[10px] font-editorial-mono text-[#39FF14]">
                    Synced with cloud runtime
                  </div>
                </div>

                {/* Bottom Home Indicator */}
                <div className="w-24 h-1 bg-white/20 rounded-full mx-auto mt-2" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
