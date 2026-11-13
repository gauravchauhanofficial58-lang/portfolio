"use client";

import React from "react";
import { Compass, Sparkles, Terminal, Code2, Cpu, Globe, UserCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="about"
      className="relative w-full py-24 sm:py-32 md:py-36 px-4 sm:px-6 md:px-12 border-t border-white/8 bg-[#070707]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header / Monospace Meta Tag */}
        <div className="flex items-center gap-3 text-xs font-editorial-mono uppercase tracking-[0.22em] text-[#FF8752] mb-6">
          <span className="w-6 h-[1px] bg-[#FF8752]" />
          <span>01 / ABOUT GAURAV</span>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column (5 cols): Large Heading & Architectural Identity Console */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <h2 className="font-editorial-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F2EEE8] font-normal tracking-[-0.02em] leading-[1.08]">
                {personal.aboutHeadline}
              </h2>

              <div className="mt-4 inline-block px-3.5 py-1.5 rounded-full bg-[#FF8752]/10 border border-[#FF8752]/20">
                <span className="text-xs font-editorial-mono text-[#FF8752] tracking-wider uppercase">
                  {personal.aboutStatement}
                </span>
              </div>
            </div>

            {/* Architectural Identity & Ethos Console (Replaces duplicate portrait with crisp technical identity) */}
            <div className="rounded-2xl border border-white/10 bg-[#0E0E0E] p-6 space-y-5 transition-all duration-300 hover:border-[#FF8752]/30">
              <div className="flex items-center justify-between border-b border-white/8 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF8752] animate-pulse" />
                  <span className="font-editorial-mono text-xs uppercase tracking-wider text-[#F2EEE8]">
                    GAURAV &middot; BUILDER PROFILE
                  </span>
                </div>
                <span className="text-[10px] font-editorial-mono text-[#77736D]">
                  SYS: ONLINE
                </span>
              </div>

              <div className="space-y-3 font-editorial-mono text-xs">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-[#77736D]">CURRENT STAGE</span>
                  <span className="text-[#F2EEE8] font-medium">Class 8 &middot; CBSE</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-[#77736D]">INSTITUTION</span>
                  <span className="text-[#D4CFCA]">Awan Educational Academy</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-[#77736D]">FUTURE VISION</span>
                  <span className="text-[#FF8752]">IIT Bombay &middot; CSE & AI/ML</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-[#77736D]">CORE LANGUAGE</span>
                  <span className="text-[#F2EEE8]">Python &middot; TypeScript</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#77736D]">LOCATION</span>
                  <span className="text-[#A6A19A]">India &middot; Global Horizon</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/6 text-xs text-[#A6A19A] leading-relaxed">
                &ldquo;Engineering software is not merely a technical pursuit — it is the medium through which we sculpt the tools of the next era.&rdquo;
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Editorial Prose & Core Tenets */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* The Main Bio Paragraphs */}
            <div className="space-y-5 text-base sm:text-lg md:text-xl font-editorial-serif text-[#A6A19A] leading-relaxed">
              <p className="text-[#F2EEE8] text-lg sm:text-xl md:text-2xl font-light">
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
            <div className="pt-6 border-t border-white/8">
              <h3 className="text-xs font-editorial-mono uppercase tracking-[0.2em] text-[#77736D] mb-5">
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
            <div className="flex flex-wrap items-center gap-2.5 pt-2 text-xs font-editorial-mono text-[#A6A19A]">
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
