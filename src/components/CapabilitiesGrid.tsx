"use client";

import React, { useState } from "react";
import { Terminal, Brain, Layers, Search, Shield, Zap, ArrowUpRight } from "lucide-react";
import { useSmoothScroll } from "./SmoothScroll";

interface Capability {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  specs: string[];
  status: string;
}

const CAPABILITIES: Capability[] = [
  {
    number: "01",
    title: "Deep System Execution",
    subtitle: "CLI & COMPUTATIONAL RUNTIME",
    description:
      "Direct integration with system runtimes. Automates developer tasks, terminal commands, file systems, and builds with deterministic precision and zero wrappers.",
    icon: <Terminal className="w-5 h-5 text-[#39FF14]" />,
    specs: ["Subprocess Spawning", "Shell Automation", "Type-Safe I/O", "POSIX/Win32"],
    status: "Native Speed",
  },
  {
    number: "02",
    title: "Real-Time Neural Agents",
    subtitle: "AGENTIC COGNITION & LLMS",
    description:
      "Autonomous agent loops coordinating multi-stage tasks. Bridging prompt intent with verification, code synthesis, tool calling, and long-term memory structures.",
    icon: <Brain className="w-5 h-5 text-[#39FF14]" />,
    specs: ["Multi-Agent Graphs", "Context Memory", "Tool Dispatch", "Error Recovery"],
    status: "Orchestrated",
  },
  {
    number: "03",
    title: "Spatial 3D & Modern Web",
    subtitle: "WEBGL, THREE.JS & SHADERS",
    description:
      "Engineering immersive digital experiences with GPU acceleration. Custom GLSL shaders, camera choreographies, and reactive Three.js particle fields.",
    icon: <Layers className="w-5 h-5 text-[#39FF14]" />,
    specs: ["Three.js / WebGL", "60 FPS Locked", "GLSL Shaders", "GSAP ScrollTrigger"],
    status: "GPU Accelerated",
  },
  {
    number: "04",
    title: "Autonomous Deep Research",
    subtitle: "SYNTHESIS & BENCHMARKS",
    description:
      "Investigating technical documentation, academic literature, and open source architectures to distill complex topics into clean, actionable software paradigms.",
    icon: <Search className="w-5 h-5 text-[#39FF14]" />,
    specs: ["Automated Extraction", "Validation Loops", "Comparative Analysis", "Synthesized Outputs"],
    status: "Continuous",
  },
];

export default function CapabilitiesGrid() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const { scrollTo } = useSmoothScroll();

  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-[#030503] border-t border-[#39FF14]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Header matching 56s */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#39FF14]/15 pb-8">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14] animate-pulse" />
              <span className="font-editorial-mono text-xs uppercase tracking-[0.22em] text-[#39FF14]">
                CORE CAPABILITIES // 04 PILLARS
              </span>
            </div>

            <h2 className="font-editorial-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F1F5EF] leading-[1.12]">
              Absolute Precision. <br />
              <span className="text-[#39FF14] drop-shadow-[0_0_20px_rgba(57,255,20,0.35)]">
                Zero Friction.
              </span>
            </h2>

            <p className="text-sm sm:text-base font-sans text-[#929B91] font-light leading-relaxed">
              Software engineering executed with architectural rigor, systems-level logic, and
              forward-looking curiosity.
            </p>
          </div>

          <button
            onClick={() => scrollTo("#contact")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#07150B] border border-[#39FF14]/30 text-xs font-editorial-mono text-[#F1F5EF] hover:bg-[#39FF14] hover:text-[#030503] transition-all duration-300 w-fit self-start sm:self-auto"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4-Card System Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap, idx) => (
            <div
              key={cap.number}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`group relative p-8 sm:p-10 rounded-2xl bg-[#07150B] border transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl ${
                hoveredIdx === idx
                  ? "border-[#39FF14] shadow-[0_0_30px_rgba(57,255,20,0.2)] -translate-y-1"
                  : "border-[#39FF14]/20 hover:border-[#39FF14]/50"
              }`}
            >
              {/* Background radial gradient on hover */}
              <div
                className="pointer-events-none absolute w-[300px] h-[300px] rounded-full blur-[90px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 -top-12 -right-12 -z-0"
                style={{
                  background: "radial-gradient(circle, #39FF14 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#030503] border border-[#39FF14]/25 flex items-center justify-center group-hover:border-[#39FF14] transition-colors">
                    {cap.icon}
                  </div>
                  <span className="font-editorial-mono text-sm tracking-widest text-[#929B91]">
                    {cap.number}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-editorial-mono tracking-widest text-[#39FF14] uppercase block">
                    {cap.subtitle}
                  </span>
                  <h3 className="font-editorial-serif text-2xl sm:text-3xl font-medium text-[#F1F5EF] mt-1 group-hover:text-[#39FF14] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm font-sans text-[#929B91] font-light leading-relaxed mt-3">
                    {cap.description}
                  </p>
                </div>
              </div>

              {/* Specs & Status Pill */}
              <div className="relative z-10 border-t border-[#39FF14]/15 pt-6 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {cap.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-2.5 py-1 rounded bg-[#030503] border border-[#39FF14]/15 text-[10px] font-editorial-mono text-[#929B91]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 self-start sm:self-auto px-2.5 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/25 text-[10px] font-editorial-mono text-[#39FF14]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
                  <span>{cap.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
