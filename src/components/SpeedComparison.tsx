"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Zap, Code, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";

export default function SpeedComparison() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPos(percent);
  }, []);

  const onMouseDown = () => setIsDragging(true);
  const onTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const onMouseUp = () => setIsDragging(false);
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("touchend", onMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [isDragging, handleMove]);

  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-[#030503] border-t border-[#39FF14]/15 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* Header matching 52s of reference video */}
        <div className="text-center max-w-2xl flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07150B] border border-[#39FF14]/25">
            <Zap className="w-3.5 h-3.5 text-[#39FF14]" />
            <span className="text-xs font-editorial-mono tracking-wider text-[#75FF36] uppercase">
              PERFORMANCE ARCHITECTURE
            </span>
          </div>

          <h2 className="font-editorial-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F1F5EF] leading-[1.15]">
            Rewritten for Speed. <br />
            <span className="text-[#39FF14] drop-shadow-[0_0_20px_rgba(57,255,20,0.35)]">
              Engineered for Scale.
            </span>
          </h2>

          <p className="text-sm sm:text-base font-sans text-[#929B91] font-light leading-relaxed">
            Early prototypes were simple exploratory scripts. The current codebase is an
            autonomous, type-safe, sub-15ms agent engine with spatial 3D interactivity.
          </p>
        </div>

        {/* Interactive Split Comparison Card */}
        <div
          ref={containerRef}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[500px] rounded-2xl bg-[#050805] border-2 border-[#39FF14]/25 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(57,255,20,0.1)] select-none cursor-ew-resize"
        >
          {/* RIGHT SIDE (UNDERNEATH): AFTER / CURRENT BUILD */}
          <div className="absolute inset-0 bg-[#07150B] p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#39FF14]/20 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14] animate-pulse" />
                <span className="text-xs font-editorial-mono tracking-wider text-[#39FF14] uppercase font-semibold">
                  AFTER: CURRENT ARCHITECTURE
                </span>
              </div>
              <div className="px-2.5 py-1 rounded bg-[#39FF14]/15 border border-[#39FF14]/30 text-[10px] font-editorial-mono text-[#39FF14]">
                12.4ms LATENCY
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto">
              <div className="p-4 rounded-xl bg-[#030503] border border-[#39FF14]/20">
                <span className="text-[10px] font-editorial-mono text-[#929B91] uppercase">
                  EXECUTION PIPELINE
                </span>
                <p className="text-xs sm:text-sm font-editorial-mono text-[#F1F5EF] mt-1">
                  Async Agentic Event-Driven Graph
                </p>
                <div className="flex items-center gap-1.5 text-[10px] font-editorial-mono text-[#39FF14] mt-2">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Sub-millisecond state dispatch</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#030503] border border-[#39FF14]/20">
                <span className="text-[10px] font-editorial-mono text-[#929B91] uppercase">
                  SPATIAL 3D RENDERING
                </span>
                <p className="text-xs sm:text-sm font-editorial-mono text-[#F1F5EF] mt-1">
                  Three.js WebGL GPU Acceleration
                </p>
                <div className="flex items-center gap-1.5 text-[10px] font-editorial-mono text-[#75FF36] mt-2">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>60 FPS buttery smooth transitions</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-editorial-mono text-[#929B91] border-t border-[#39FF14]/15 pt-3">
              <span>Next.js 16 · TypeScript · PyTorch Core</span>
              <span className="text-[#39FF14]">STATUS: OPTIMIZED</span>
            </div>
          </div>

          {/* LEFT SIDE (CLIPPED): BEFORE / V0.1 PROTOTYPE */}
          <div
            className="absolute inset-0 bg-[#090b09] p-6 sm:p-8 flex flex-col justify-between border-r border-[#39FF14]"
            style={{
              clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
            }}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <span className="text-xs font-editorial-mono tracking-wider text-[#929B91] uppercase font-medium">
                  BEFORE: V0.1 INITIAL SCRIPT
                </span>
              </div>
              <div className="px-2.5 py-1 rounded bg-red-500/10 border border-red-500/20 text-[10px] font-editorial-mono text-red-400">
                480ms BLOCKING
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto">
              <div className="p-4 rounded-xl bg-[#050805] border border-white/10">
                <span className="text-[10px] font-editorial-mono text-[#929B91] uppercase">
                  EXECUTION PIPELINE
                </span>
                <p className="text-xs sm:text-sm font-editorial-mono text-[#929B91] mt-1">
                  Monolithic Sequential Python Script
                </p>
                <div className="flex items-center gap-1.5 text-[10px] font-editorial-mono text-amber-400/80 mt-2">
                  <AlertCircle className="w-3 h-3" />
                  <span>Thread-blocking synchronous I/O</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#050805] border border-white/10">
                <span className="text-[10px] font-editorial-mono text-[#929B91] uppercase">
                  UI LAYER
                </span>
                <p className="text-xs sm:text-sm font-editorial-mono text-[#929B91] mt-1">
                  Static 2D DOM Elements
                </p>
                <div className="flex items-center gap-1.5 text-[10px] font-editorial-mono text-amber-400/80 mt-2">
                  <AlertCircle className="w-3 h-3" />
                  <span>No 3D spatial depth</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-editorial-mono text-[#929B91] border-t border-white/10 pt-3">
              <span>Legacy Python script</span>
              <span className="text-amber-400">STATUS: DEPRECATED</span>
            </div>
          </div>

          {/* DRAGGABLE VERTICAL DIVIDER LINE & KNOB */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-[#39FF14] shadow-[0_0_12px_#39FF14] pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#07150B] border-2 border-[#39FF14] shadow-[0_0_16px_rgba(57,255,20,0.6)] flex items-center justify-center text-[10px] font-editorial-mono text-[#39FF14] font-bold">
              {"< >"}
            </div>
          </div>
        </div>

        <p className="text-xs font-editorial-mono text-[#929B91] text-center tracking-wider">
          ↔ Drag the slider or touch anywhere to inspect architectural evolution
        </p>
      </div>
    </section>
  );
}
