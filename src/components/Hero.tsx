"use client";

import React, { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Palette } from "lucide-react";
import HeroPortrait from "@/components/HeroPortrait";

interface HeroProps {
  motionEnabled?: boolean;
}

export default function Hero({ motionEnabled = true }: HeroProps) {
  const [mounted, setMounted] = useState(false);
  const [portraitMode, setPortraitMode] = useState<"cinematic" | "color">("cinematic");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!motionEnabled) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [motionEnabled]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-8 md:pb-12 overflow-hidden bg-[#050505] select-none"
    >
      {/* 1. Global Ambient Spotlight Glow behind the Center Stage */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[650px] md:w-[900px] h-[450px] sm:h-[650px] md:h-[900px] rounded-full opacity-20 md:opacity-25 blur-[120px] md:blur-[150px] -z-10 transition-transform duration-700 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(255,135,82,0.3) 0%, rgba(5,5,5,0) 70%)",
          transform: `translate(calc(-50% + ${mousePos.x * 16}px), calc(-50% + ${mousePos.y * 16}px))`,
        }}
        aria-hidden="true"
      />

      {/* 2. Top Metadata Row */}
      <div className="w-full max-w-7xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-editorial-mono uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#A6A19A] z-20">
        {/* Top-left: Orange Status Indicator */}
        <div
          className={`flex items-center gap-2 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8752] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF8752]" />
          </span>
          <span className="text-[#F2EEE8] font-medium tracking-[0.16em] sm:tracking-[0.18em]">
            TECH ENTHUSIAST &middot; DEVELOPER &middot; BUILDER
          </span>
        </div>

        {/* Top-right: Based in India & Color Mode Switcher */}
        <div
          className={`flex items-center gap-3 sm:gap-4 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <button
            onClick={() =>
              setPortraitMode((prev) => (prev === "cinematic" ? "color" : "cinematic"))
            }
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 hover:border-[#FF8752]/50 text-[10px] sm:text-[11px] text-[#A6A19A] hover:text-[#F2EEE8] transition-all bg-[#111111]/70 backdrop-blur-sm cursor-pointer"
            title="Toggle between Cinematic Monochrome and Original Color treatment"
            aria-label="Toggle portrait color mode"
          >
            <Palette className="w-3 h-3 text-[#FF8752]" />
            <span>
              {portraitMode === "cinematic" ? "Cinematic B&W" : "Natural Color"}
            </span>
          </button>
          <span className="text-[#77736D] tracking-[0.18em] hidden md:inline">
            BASED IN INDIA &middot; THINKING BEYOND
          </span>
        </div>
      </div>

      {/* 3. Center Stage: Monumental Typography and Seamlessly Blended Portrait */}
      <div className="relative w-full max-w-7xl flex-1 flex flex-col items-center justify-center my-1 sm:my-2 md:my-0 min-h-[360px] sm:min-h-[440px] md:min-h-[520px]">
        {/* Singular Monumental Serif Name Heading ("GAURAV") — Exactly One Instance */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          <h1
            className="font-editorial-serif text-[18vw] sm:text-[16vw] md:text-[14.5vw] lg:text-[13vw] font-normal leading-none tracking-[-0.035em] text-[#F2EEE8]/30 sm:text-[#F2EEE8]/35 md:text-[#F2EEE8]/40 select-none whitespace-nowrap will-change-transform transition-all duration-1000"
            style={{
              transform: mounted
                ? `translate3d(${mousePos.x * -10}px, ${mousePos.y * -6}px, 0)`
                : "translate3d(0, 24px, 0)",
              opacity: mounted ? 1 : 0,
            }}
          >
            GAURAV
          </h1>
        </div>

        {/* Gaurav's Authentic Retouched Portrait with Dark Studio Blending */}
        <HeroPortrait
          mode={portraitMode}
          mousePos={mousePos}
          motionEnabled={motionEnabled}
          mounted={mounted}
        />
      </div>

      {/* 4. Bottom Information Row: Subtitle, CTAs, and Scroll Prompt */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 z-20 pt-4 border-t border-white/8">
        {/* Left: Inspiring Editorial Subtitle */}
        <div
          className={`max-w-md text-center md:text-left transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-editorial-serif text-base sm:text-lg md:text-xl text-[#F2EEE8] font-light leading-snug">
            &ldquo;I explore technology, build digital experiences, and imagine what&apos;s next.&rdquo;
          </p>
          <p className="text-[11px] sm:text-xs font-editorial-mono text-[#77736D] mt-1 uppercase tracking-wider">
            Aspiring AI/ML Engineer &middot; Independent Builder
          </p>
        </div>

        {/* Center: Action Buttons (Responsive Side-by-Side on all viewports) */}
        <div
          className={`flex items-center gap-2.5 sm:gap-3 transition-all duration-700 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={() => scrollTo("work")}
            className="group relative inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#F2EEE8] text-[#050505] text-[11px] sm:text-xs font-editorial-mono uppercase tracking-[0.14em] sm:tracking-[0.16em] font-medium transition-all duration-300 hover:bg-[#FF8752] hover:shadow-[0_0_25px_rgba(255,135,82,0.45)] cursor-pointer"
          >
            <span>Explore Work</span>
            <ArrowDown className="w-3 sm:w-3.5 h-3 sm:h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="group relative inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#111111]/80 hover:bg-[#1A1A1A] text-[#F2EEE8] text-[11px] sm:text-xs font-editorial-mono uppercase tracking-[0.14em] sm:tracking-[0.16em] font-normal border border-white/12 hover:border-[#FF8752]/50 transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#FF8752] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Right: Scroll to Discover indicator */}
        <div
          onClick={() => scrollTo("about")}
          className={`cursor-pointer hidden lg:flex items-center gap-3 text-xs font-editorial-mono uppercase tracking-[0.2em] text-[#A6A19A] hover:text-[#FF8752] transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span>Scroll to Discover</span>
          <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[#FF8752]">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#FF8752]" />
          </div>
        </div>
      </div>
    </section>
  );
}
