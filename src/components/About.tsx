"use client";

import React from "react";
import { Compass, Sparkles, Terminal, Code2, Cpu, Globe, Brain, Layers, Rocket, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  const explorationThemes = [
    { label: "Artificial Intelligence", icon: Brain },
    { label: "Machine Learning", icon: Cpu },
    { label: "Software Architecture", icon: Terminal },
    { label: "Web Engineering", icon: Code2 },
    { label: "Creative Coding", icon: Sparkles },
    { label: "Digital Products", icon: Layers },
    { label: "Future Technology", icon: Rocket },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-24 sm:py-32 md:py-36 px-4 sm:px-6 md:px-12 border-t border-white/8 bg-[#060606]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header / Monospace Meta Tag */}
        <div className="flex items-center gap-3 text-xs font-editorial-mono uppercase tracking-[0.22em] text-[#FF8050] mb-8">
          <span className="w-6 h-[1px] bg-[#FF8050]" />
          <span>01 / ABOUT GAURAV</span>
        </div>

        {/* Editorial Split Layout with Sticky Left Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column (5 cols): Sticky Architectural Identity Console */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <div>
              <h2 className="font-editorial-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F2EEE7] font-normal tracking-[-0.02em] leading-[1.08]">
                {personal.aboutHeadline}
              </h2>

              <div className="mt-4 inline-block px-3.5 py-1.5 rounded-full bg-[#FF8050]/10 border border-[#FF8050]/20">
                <span className="text-xs font-editorial-mono text-[#FF8050] tracking-wider uppercase">
                  {personal.aboutStatement}
                </span>
              </div>
            </div>

            {/* Architectural Identity & Ethos Console */}
            <div className="rounded-2xl border border-white/10 bg-[#0C0C0C] p-6 space-y-5 transition-all duration-300 hover:border-[#FF8050]/30 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/8 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF8050] animate-pulse" />
                  <span className="font-editorial-mono text-xs uppercase tracking-wider text-[#F2EEE7]">
                    GAURAV &middot; BUILDER PROFILE
                  </span>
                </div>
                <span className="text-[10px] font-editorial-mono text-[#96918C]">
                  INDEPENDENT BUILDER
                </span>
              </div>

              <div className="space-y-3 font-editorial-mono text-xs">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-[#96918C]">CURRENT STAGE</span>
                  <span className="text-[#F2EEE7] font-medium">Class 8 &middot; CBSE</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-[#96918C]">INSTITUTION</span>
                  <span className="text-[#D4CFCA]">Awan Educational Academy</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-[#96918C]">FUTURE VISION</span>
                  <span className="text-[#FF8050]">IIT Bombay &middot; CSE & AI/ML</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-[#96918C]">CORE LANGUAGES</span>
                  <span className="text-[#F2EEE7]">Python &middot; TypeScript</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#96918C]">LOCATION</span>
                  <span className="text-[#96918C]">India &middot; Global Horizon</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/6 text-xs text-[#96918C] leading-relaxed">
                &ldquo;Engineering software is not merely a technical pursuit — it is the medium through which we sculpt the tools of the next era.&rdquo;
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Editorial Narrative, Themes & Core Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* The Main Bio Paragraphs */}
            <div className="space-y-6 text-base sm:text-lg md:text-xl font-editorial-serif text-[#96918C] leading-relaxed">
              <p className="text-[#F2EEE7] text-xl sm:text-2xl md:text-3xl font-light leading-snug">
                &ldquo;{personal.aboutParagraphs[0]}&rdquo;
              </p>
              <p className="text-[#D4CFCA]">
                {personal.aboutParagraphs[1]}
              </p>
              <p>
                {personal.aboutParagraphs[2]}
              </p>
            </div>

            {/* Curiosity & Technology Spectrum */}
            <div className="pt-6 border-t border-white/8">
              <h3 className="text-xs font-editorial-mono uppercase tracking-[0.2em] text-[#96918C] mb-4">
                Curiosity Spectrum
              </h3>
              <div className="flex flex-wrap gap-2">
                {explorationThemes.map((theme) => {
                  const Icon = theme.icon;
                  return (
                    <span
                      key={theme.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-editorial-mono bg-white/[0.04] border border-white/8 text-[#D4CFCA] hover:border-[#FF8050]/40 hover:text-[#FF8050] transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#FF8050]" />
                      <span>{theme.label}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Core Tenets Cards */}
            <div className="pt-6 border-t border-white/8">
              <h3 className="text-xs font-editorial-mono uppercase tracking-[0.2em] text-[#96918C] mb-5">
                Guiding Principles
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {personal.pillars.map((pillar, idx) => {
                  const icons = [Terminal, Code2, Compass];
                  const Icon = icons[idx % icons.length];
                  return (
                    <div
                      key={pillar.title}
                      className="p-5 rounded-xl bg-[#0E0E0E] border border-white/8 hover:border-[#FF8050]/40 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#FF8050] mb-3">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-editorial-serif text-lg text-[#F2EEE7] font-normal mb-1">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-[#96918C] leading-relaxed">
                          {pillar.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats / Identity Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2 text-xs font-editorial-mono text-[#96918C]">
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/8">
                CBSE STUDENT
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/8">
                INDEPENDENT BUILDER
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/8">
                PYTHON &middot; REACT &middot; AI/ML
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#FF8050]/10 border border-[#FF8050]/20 text-[#FF8050]">
                AIMING FOR IIT BOMBAY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
