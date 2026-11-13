"use client";

import React from "react";
import Image from "next/image";
import { Compass, Sparkles, Terminal, Code2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="about"
      className="relative w-full py-28 md:py-36 px-4 md:px-8 border-t border-white/8 bg-[#070707]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header / Monospace Meta Tag */}
        <div className="flex items-center gap-3 text-xs font-editorial-mono uppercase tracking-[0.22em] text-[#FF8752] mb-6">
          <span className="w-6 h-[1px] bg-[#FF8752]" />
          <span>01 / ABOUT GAURAV</span>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols): Large Heading & Portrait Card */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <h2 className="font-editorial-serif text-4xl sm:text-5xl md:text-6xl text-[#F2EEE8] font-normal tracking-[-0.02em] leading-[1.08]">
                {personal.aboutHeadline}
              </h2>

              <div className="mt-6 inline-block px-3.5 py-1.5 rounded-full bg-[#FF8752]/10 border border-[#FF8752]/20">
                <span className="text-xs font-editorial-mono text-[#FF8752] tracking-wider uppercase">
                  {personal.aboutStatement}
                </span>
              </div>
            </div>

            {/* Cinematic Portrait Card Detail */}
            <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-[#111111] p-2 transition-all duration-500 hover:border-[#FF8752]/40">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#0A0A0A]">
                <Image
                  src="/images/portrait_cinematic.webp"
                  alt="Gaurav Portrait Vignette"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top filter grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

                {/* Overlay Metadata */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-editorial-mono text-[#F2EEE8]/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF8752] animate-pulse" />
                    <span>GAURAV &middot; INDIA</span>
                  </div>
                  <span className="text-[#A6A19A]">ASPIRING AI/ML</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Editorial Prose & Core Tenets */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* The Main Bio Paragraphs */}
            <div className="space-y-6 text-lg sm:text-xl font-editorial-serif text-[#A6A19A] leading-relaxed">
              <p className="text-[#F2EEE8] text-xl sm:text-2xl font-light">
                &ldquo;{personal.aboutParagraphs[0]}&rdquo;
              </p>
              <p>
                {personal.aboutParagraphs[1]}
              </p>
              <p className="text-[#D4CFCA]">
                {personal.aboutParagraphs[2]}
              </p>
            </div>

            {/* Core Tenets Cards */}
            <div className="pt-8 border-t border-white/8">
              <h3 className="text-xs font-editorial-mono uppercase tracking-[0.2em] text-[#77736D] mb-6">
                Guiding Principles
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {personal.pillars.map((pillar, idx) => {
                  const icons = [Terminal, Code2, Compass];
                  const Icon = icons[idx % icons.length];
                  return (
                    <div
                      key={pillar.title}
                      className="p-5 rounded-xl bg-[#111111]/70 border border-white/8 hover:border-[#FF8752]/30 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#FF8752] mb-3">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-editorial-serif text-lg text-[#F2EEE8] font-normal mb-1">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-[#A6A19A] leading-relaxed">
                          {pillar.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats / Identity Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-editorial-mono text-[#A6A19A]">
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/8">
                CBSE STUDENT
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/8">
                INDEPENDENT BUILDER
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/8">
                PYTHON &middot; REACT &middot; AI/ML
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#FF8752]/10 border border-[#FF8752]/20 text-[#FF8752]">
                AIMING FOR IIT BOMBAY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
