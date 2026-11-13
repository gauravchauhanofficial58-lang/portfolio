"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Palette } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface HeroProps {
  motionEnabled?: boolean;
}

export default function Hero({ motionEnabled = true }: HeroProps) {
  const [mounted, setMounted] = useState(false);
  const [portraitMode, setPortraitMode] = useState<"cinematic" | "color">("cinematic");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

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

  const nameLetters = "GAURAV".split("");

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-4 md:px-8 pt-24 md:pt-28 pb-10 overflow-hidden select-none"
    >
      {/* Ambient Radial Spotlight Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] rounded-full opacity-25 blur-[120px] -z-10 transition-transform duration-700 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(255,135,82,0.22) 0%, rgba(5,5,5,0) 70%)",
          transform: `translate(calc(-50% + ${mousePos.x * 25}px), calc(-50% + ${mousePos.y * 25}px))`,
        }}
        aria-hidden="true"
      />

      {/* Top Metadata Row */}
      <div className="w-full max-w-7xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-editorial-mono uppercase tracking-[0.18em] text-[#A6A19A] z-20">
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
          <span className="text-[#F2EEE8] font-medium tracking-[0.16em]">
            TECH ENTHUSIAST. DEVELOPER. BUILDER.
          </span>
        </div>

        {/* Top-right: Based in India & Portrait Switcher */}
        <div
          className={`flex items-center gap-4 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <button
            onClick={() =>
              setPortraitMode((prev) => (prev === "cinematic" ? "color" : "cinematic"))
            }
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 hover:border-[#FF8752]/50 text-[11px] text-[#A6A19A] hover:text-[#F2EEE8] transition-all bg-[#111111]/40 backdrop-blur-sm"
            title="Toggle between Cinematic Monochrome and Original Color treatment"
            aria-label="Toggle portrait color palette"
          >
            <Palette className="w-3 h-3 text-[#FF8752]" />
            <span className="hidden sm:inline">
              {portraitMode === "cinematic" ? "Cinematic B&W" : "Natural Color"}
            </span>
          </button>
          <span className="text-[#77736D] tracking-[0.2em]">
            BASED IN INDIA · THINKING BEYOND
          </span>
        </div>
      </div>

      {/* Center Composition: Portrait & Giant Serif Typography */}
      <div className="relative flex-1 w-full max-w-6xl flex items-center justify-center my-4 md:my-0 min-h-[440px] md:min-h-[580px]">
        {/* Layer 1: Giant Background Name Typography ("GAURAV") */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          <h1 className="font-editorial-serif text-[20vw] md:text-[18vw] lg:text-[16vw] font-normal leading-none tracking-[-0.04em] text-[#F2EEE8]/12 md:text-[#F2EEE8]/15 flex items-center justify-center whitespace-nowrap will-change-transform">
            {nameLetters.map((char, index) => (
              <span
                key={index}
                className="inline-block transition-all duration-1000 ease-out"
                style={{
                  transitionDelay: `${300 + index * 90}ms`,
                  transform: mounted
                    ? `translate3d(${mousePos.x * (index - 2.5) * -6}px, ${
                        mousePos.y * -8
                      }px, 0)`
                    : "translate3d(0, 40px, 0) scale(0.95)",
                  opacity: mounted ? 1 : 0,
                }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* Layer 2: Gaurav's Real Portrait Cutout with Cinematic Treatment */}
        <div
          className="relative z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[490px] aspect-[3/4] flex items-end justify-center transition-transform duration-500 ease-out will-change-transform"
          style={{
            perspective: "1200px",
            transform: motionEnabled
              ? `translate3d(${mousePos.x * 12}px, ${mousePos.y * 10}px, 0) rotateY(${
                  mousePos.x * 4.5
                }deg) rotateX(${-mousePos.y * 4.5}deg)`
              : "none",
          }}
        >
          {/* Subtle rim glow behind the shoulders */}
          <div
            className="absolute inset-x-8 bottom-6 top-16 -z-10 rounded-full blur-[70px] opacity-25 transition-opacity duration-700 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #FF8752 0%, rgba(255,135,82,0) 70%)",
            }}
          />

          {/* Portrait Image Container */}
          <div
            className={`relative w-full h-full flex items-end justify-center transition-all duration-1000 ease-out ${
              mounted
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-8"
            }`}
          >
            {/* Cinematic Version (Default): Clean cutout with monochrome contrast & preserved vermilion tilak */}
            <div
              className={`absolute inset-0 flex items-end justify-center transition-opacity duration-500 ${
                portraitMode === "cinematic" ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src="/images/portrait_cinematic.webp"
                alt="Cinematic Portrait of Gaurav"
                width={768}
                height={1024}
                priority
                quality={95}
                className="w-full h-auto max-h-[82vh] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
              />
            </div>

            {/* Color Version (Switchable): Full authentic colors */}
            <div
              className={`absolute inset-0 flex items-end justify-center transition-opacity duration-500 ${
                portraitMode === "color" ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src="/images/portrait_color.webp"
                alt="Natural Color Portrait of Gaurav"
                width={768}
                height={1024}
                priority={false}
                quality={95}
                className="w-full h-auto max-h-[82vh] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
              />
            </div>
          </div>

          {/* Bottom Gradient Fade to Black to blend naturally with dark background */}
          <div
            className="absolute -bottom-1 inset-x-0 h-28 pointer-events-none z-20"
            style={{
              background: "linear-gradient(to top, #050505 15%, rgba(5,5,5,0.85) 45%, transparent 100%)",
            }}
          />
        </div>

        {/* Layer 3: Foreground High-Contrast Floating Name (Overlapping the portrait) */}
        <div
          className="absolute inset-x-0 bottom-2 md:bottom-6 flex items-center justify-center pointer-events-none select-none z-20"
          aria-hidden="true"
        >
          <span className="font-editorial-serif text-[12vw] md:text-[10vw] font-normal leading-none tracking-[-0.03em] text-[#F2EEE8] text-center drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] opacity-95">
            GAURAV
          </span>
        </div>
      </div>

      {/* Bottom Information Row: Subtitle, CTA buttons, and Scroll Prompt */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 z-20 pt-2 border-t border-white/8">
        {/* Left: Inspiring Editorial Subtitle */}
        <div
          className={`max-w-md text-center md:text-left transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-editorial-serif text-lg md:text-xl text-[#F2EEE8] font-light leading-snug">
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
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F2EEE8] text-[#050505] text-xs font-editorial-mono uppercase tracking-[0.16em] font-medium transition-all duration-300 hover:bg-[#FF8752] hover:shadow-[0_0_25px_rgba(255,135,82,0.45)]"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111]/80 hover:bg-[#1A1A1A] text-[#F2EEE8] text-xs font-editorial-mono uppercase tracking-[0.16em] font-normal border border-white/12 hover:border-[#FF8752]/50 transition-all duration-300 backdrop-blur-md"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FF8752] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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

