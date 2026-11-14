"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Palette } from "lucide-react";

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
      className="relative min-h-[100svh] w-full flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 pt-24 md:pt-28 pb-8 md:pb-12 overflow-hidden bg-[#050505] select-none"
    >
      {/* Ambient Radial Spotlight Glow behind Center Stage */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] md:w-[850px] h-[550px] md:h-[850px] rounded-full opacity-25 blur-[140px] -z-10 transition-transform duration-700 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(255,135,82,0.35) 0%, rgba(5,5,5,0) 70%)",
          transform: `translate(calc(-50% + ${mousePos.x * 20}px), calc(-50% + ${mousePos.y * 20}px))`,
        }}
        aria-hidden="true"
      />

      {/* Top Metadata Row */}
      <div className="w-full max-w-7xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-editorial-mono uppercase tracking-[0.2em] text-[#A6A19A] z-20">
        {/* Top-left: Orange Status Indicator */}
        <div
          className={`flex items-center gap-2.5 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8752] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF8752]" />
          </span>
          <span className="text-[#F2EEE8] font-medium tracking-[0.18em]">
            TECH ENTHUSIAST. DEVELOPER. BUILDER.
          </span>
        </div>

        {/* Top-right: Based in India & Color Mode Switcher */}
        <div
          className={`flex items-center gap-4 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <button
            onClick={() =>
              setPortraitMode((prev) => (prev === "cinematic" ? "color" : "cinematic"))
            }
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 hover:border-[#FF8752]/50 text-[11px] text-[#A6A19A] hover:text-[#F2EEE8] transition-all bg-[#111111]/70 backdrop-blur-sm cursor-pointer"
            title="Toggle between Cinematic Monochrome and Original Color treatment"
            aria-label="Toggle portrait color mode"
          >
            <Palette className="w-3 h-3 text-[#FF8752]" />
            <span className="hidden sm:inline">
              {portraitMode === "cinematic" ? "Cinematic B&W" : "Natural Color"}
            </span>
          </button>
          <span className="text-[#77736D] tracking-[0.2em] hidden sm:inline">
            BASED IN INDIA &middot; THINKING BEYOND
          </span>
        </div>
      </div>

      {/* Center Stage: Monumental Typography and Authentic Centered Portrait */}
      <div className="relative w-full max-w-7xl flex-1 flex flex-col items-center justify-center my-2 md:my-0 min-h-[400px] sm:min-h-[480px] md:min-h-[560px]">
        {/* The Singular Monumental Name Heading — NO DUPLICATES */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          <h1
            className="font-editorial-serif text-[20vw] sm:text-[18vw] md:text-[15vw] lg:text-[13.5vw] font-normal leading-none tracking-[-0.035em] text-[#F2EEE8]/30 sm:text-[#F2EEE8]/35 md:text-[#F2EEE8]/40 select-none whitespace-nowrap will-change-transform transition-all duration-1000"
            style={{
              transform: mounted
                ? `translate3d(${mousePos.x * -12}px, ${mousePos.y * -8}px, 0)`
                : "translate3d(0, 30px, 0)",
              opacity: mounted ? 1 : 0,
            }}
          >
            GAURAV
          </h1>
        </div>

        {/* Gaurav's Single Authentic Portrait (Mathematically Centered, Natural Aspect Ratio, Zero Clipping) */}
        <div
          className={`relative z-10 flex items-end justify-center h-[48vh] sm:h-[52vh] md:h-[58vh] lg:h-[62vh] max-h-[620px] w-auto aspect-[3/4] transition-all duration-1000 ease-out will-change-transform ${
            mounted
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-8"
          }`}
          style={{
            transform: motionEnabled
              ? `translate3d(${mousePos.x * 10}px, ${mousePos.y * 8}px, 0)`
              : "none",
          }}
        >
          {/* Subtle Warm Halo Behind Shoulders */}
          <div
            className="absolute inset-x-6 bottom-6 top-16 -z-10 rounded-full blur-[70px] opacity-25 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #FF8752 0%, rgba(255,135,82,0) 70%)",
            }}
            aria-hidden="true"
          />

          {/* EXACTLY ONE SINGLE IMAGE COMPONENT — PRESERVED REAL FACE & AUTHENTIC TILAK */}
          <Image
            src={
              portraitMode === "cinematic"
                ? "/images/portrait_cinematic.webp"
                : "/images/portrait_color.webp"
            }
            alt="Cinematic Portrait of Gaurav"
            width={768}
            height={1024}
            priority
            quality={95}
            className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] transition-all duration-500"
          />

          {/* Seamless Bottom Gradient Fade into Floor */}
          <div
            className="absolute -bottom-1 inset-x-0 h-28 pointer-events-none z-20"
            style={{
              background:
                "linear-gradient(to top, #050505 15%, rgba(5,5,5,0.85) 55%, transparent 100%)",
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Bottom Information Row: Subtitle, Action CTAs, and Scroll Indicator */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 z-20 pt-4 border-t border-white/8">
        {/* Left: Inspiring Editorial Subtitle */}
        <div
          className={`max-w-md text-center md:text-left transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-editorial-serif text-lg sm:text-xl text-[#F2EEE8] font-light leading-snug">
            &ldquo;I explore technology, build digital experiences, and imagine what&apos;s next.&rdquo;
          </p>
          <p className="text-xs font-editorial-mono text-[#77736D] mt-1 uppercase tracking-wider">
            Aspiring AI/ML Engineer &middot; Independent Builder
          </p>
        </div>

        {/* Center: Action Buttons */}
        <div
          className={`flex items-center gap-3 sm:gap-4 transition-all duration-700 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={() => scrollTo("work")}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F2EEE8] text-[#050505] text-xs font-editorial-mono uppercase tracking-[0.16em] font-medium transition-all duration-300 hover:bg-[#FF8752] hover:shadow-[0_0_25px_rgba(255,135,82,0.45)] cursor-pointer"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111]/80 hover:bg-[#1A1A1A] text-[#F2EEE8] text-xs font-editorial-mono uppercase tracking-[0.16em] font-normal border border-white/12 hover:border-[#FF8752]/50 transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FF8752] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Right: Scroll to Discover Indicator */}
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
