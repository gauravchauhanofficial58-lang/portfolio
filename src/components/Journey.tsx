"use client";

import React from "react";
import { GraduationCap, Target, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Journey() {
  const { journey } = PORTFOLIO_DATA;

  return (
    <section
      id="journey"
      className="relative w-full py-28 md:py-36 px-4 md:px-8 border-t border-[#39FF14]/15 bg-[#050805]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 text-xs font-editorial-mono uppercase tracking-[0.22em] text-[#39FF14] mb-4">
              <span className="w-6 h-[1px] bg-[#39FF14]" />
              <span>05 / EVOLUTION</span>
            </div>
            <h2 className="font-editorial-serif text-4xl sm:text-5xl md:text-6xl text-[#F1F5EF] font-normal tracking-[-0.02em]">
              Education &amp; Journey.
            </h2>
          </div>
          <p className="max-w-md text-sm font-editorial-mono text-[#929B91] leading-relaxed">
            Honest mapping of current academic milestones and future horizons in computer science and artificial intelligence.
          </p>
        </div>

        {/* 2 Featured Pillars: Current Education vs Future Aspiration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Current Education Card */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-[#07150B] border border-[#39FF14]/20 overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <GraduationCap className="w-32 h-32 text-white" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#39FF14] shadow-[0_0_8px_#39FF14]" />
                </span>
                <span className="text-xs font-editorial-mono uppercase tracking-[0.18em] text-[#39FF14] font-medium">
                  CURRENT EDUCATION
                </span>
              </div>

              <span className="text-sm font-editorial-mono text-[#5D665C] uppercase tracking-wider block">
                Standard
              </span>
              <h3 className="font-editorial-serif text-3xl sm:text-4xl text-[#F1F5EF] font-normal mb-2">
                {journey.current.stage}
              </h3>

              <div className="space-y-1.5 mb-6">
                <p className="text-base text-[#D4CFCA] font-medium">
                  {journey.current.institution}
                </p>
                <p className="text-xs font-editorial-mono text-[#929B91]">
                  Affiliation: {journey.current.board} (Central Board of Secondary Education)
                </p>
              </div>

              <p className="text-sm text-[#929B91] leading-relaxed">
                {journey.current.focus}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#39FF14]/10 flex items-center justify-between text-xs font-editorial-mono text-[#5D665C]">
              <span>STATUS: IN PROGRESS</span>
              <span className="text-[#F1F5EF]">INDIA</span>
            </div>
          </div>

          {/* Future Aspiration Card */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#07150B] to-[#092313] border border-[#39FF14]/40 overflow-hidden flex flex-col justify-between shadow-[0_0_50px_rgba(57,255,20,0.12)]">
            <div className="absolute top-0 right-0 p-8 opacity-15 pointer-events-none">
              <Target className="w-32 h-32 text-[#39FF14]" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-4 h-4 text-[#39FF14]" />
                <span className="text-xs font-editorial-mono uppercase tracking-[0.18em] text-[#39FF14] font-medium">
                  FUTURE ASPIRATION
                </span>
              </div>

              <span className="text-sm font-editorial-mono text-[#39FF14]/70 uppercase tracking-wider block">
                Target Institution
              </span>
              <h3 className="font-editorial-serif text-3xl sm:text-4xl text-[#F1F5EF] font-normal mb-2">
                {journey.futureAspiration.target}
              </h3>

              <div className="space-y-1.5 mb-6">
                <p className="text-base text-[#39FF14] font-medium">
                  {journey.futureAspiration.program}
                </p>
                <p className="text-xs font-editorial-mono text-[#929B91]">
                  Indian Institute of Technology, Bombay
                </p>
              </div>

              <p className="text-sm text-[#929B91] leading-relaxed">
                {journey.futureAspiration.vision}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#39FF14]/20 flex items-center justify-between text-xs font-editorial-mono text-[#39FF14]">
              <span>MISSION: AI INNOVATION</span>
              <span>VISION 2030+</span>
            </div>
          </div>
        </div>

        {/* Vertical Detailed Timeline */}
        <div className="border-t border-[#39FF14]/15 pt-16">
          <h3 className="text-xs font-editorial-mono uppercase tracking-[0.2em] text-[#5D665C] mb-12">
            Chronological Progression
          </h3>

          <div className="relative pl-6 md:pl-10 border-l border-[#39FF14]/20 space-y-12">
            {journey.timeline.map((item) => (
              <div key={item.title} className="relative group">
                {/* Timeline Node Icon */}
                <div
                  className={`absolute -left-[31px] md:-left-[47px] top-1 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                    item.isCurrent
                      ? "bg-[#39FF14] border-[#75FF36] shadow-[0_0_15px_rgba(57,255,20,0.6)]"
                      : item.isAspiration
                      ? "bg-[#75FF36] border-[#39FF14] shadow-[0_0_15px_rgba(117,255,54,0.6)]"
                      : "bg-[#07150B] border-[#39FF14]/30 group-hover:border-[#39FF14]"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.isCurrent || item.isAspiration ? "bg-[#030503]" : "bg-[#39FF14]/60"
                    }`}
                  />
                </div>

                {/* Milestone Details */}
                <div className="p-6 md:p-8 rounded-2xl bg-[#07150B] border border-[#39FF14]/15 group-hover:border-[#39FF14]/40 transition-all duration-300 shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-editorial-mono text-[#39FF14] uppercase tracking-wider">
                      {item.era} &middot; {item.organization}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-editorial-mono uppercase tracking-wider ${
                        item.isCurrent
                          ? "bg-[#39FF14]/15 text-[#39FF14] border border-[#39FF14]/40"
                          : item.isAspiration
                          ? "bg-[#75FF36]/15 text-[#75FF36] border border-[#75FF36]/40"
                          : "bg-white/5 text-[#929B91] border border-white/10"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="font-editorial-serif text-2xl text-[#F1F5EF] font-normal mb-2">
                    {item.title}
                  </h4>

                  <p className="text-sm text-[#929B91] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#39FF14]/10">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-editorial-mono bg-white/5 text-[#D4CFCA] border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
