"use client";

import React from "react";
import { GraduationCap, Target, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Journey() {
  const { journey } = PORTFOLIO_DATA;

  return (
    <section
      id="journey"
      className="relative w-full py-28 md:py-36 px-4 md:px-8 border-t border-white/8 bg-[#070707]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 text-xs font-editorial-mono uppercase tracking-[0.22em] text-[#FF8752] mb-4">
              <span className="w-6 h-[1px] bg-[#FF8752]" />
              <span>05 / EVOLUTION</span>
            </div>
            <h2 className="font-editorial-serif text-4xl sm:text-5xl md:text-6xl text-[#F2EEE8] font-normal tracking-[-0.02em]">
              Education &amp; Journey.
            </h2>
          </div>
          <p className="max-w-md text-sm font-editorial-mono text-[#A6A19A] leading-relaxed">
            Honest mapping of current academic milestones and future horizons in computer science and artificial intelligence.
          </p>
        </div>

        {/* 2 Featured Pillars: Current Education vs Future Aspiration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Current Education Card */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-[#0F0F0F] border border-white/10 overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <GraduationCap className="w-32 h-32 text-white" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-editorial-mono uppercase tracking-[0.18em] text-emerald-400 font-medium">
                  CURRENT EDUCATION
                </span>
              </div>

              <span className="text-sm font-editorial-mono text-[#77736D] uppercase tracking-wider block">
                Standard
              </span>
              <h3 className="font-editorial-serif text-3xl sm:text-4xl text-[#F2EEE8] font-normal mb-2">
                {journey.current.stage}
              </h3>

              <div className="space-y-1.5 mb-6">
                <p className="text-base text-[#D4CFCA] font-medium">
                  {journey.current.institution}
                </p>
                <p className="text-xs font-editorial-mono text-[#A6A19A]">
                  Affiliation: {journey.current.board} (Central Board of Secondary Education)
                </p>
              </div>

              <p className="text-sm text-[#A6A19A] leading-relaxed">
                {journey.current.focus}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/8 flex items-center justify-between text-xs font-editorial-mono text-[#77736D]">
              <span>STATUS: IN PROGRESS</span>
              <span className="text-[#F2EEE8]">INDIA</span>
            </div>
          </div>

          {/* Future Aspiration Card */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#14100D] to-[#0D0D0D] border border-[#FF8752]/30 overflow-hidden flex flex-col justify-between shadow-[0_0_50px_rgba(255,135,82,0.08)]">
            <div className="absolute top-0 right-0 p-8 opacity-15 pointer-events-none">
              <Target className="w-32 h-32 text-[#FF8752]" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-4 h-4 text-[#FF8752]" />
                <span className="text-xs font-editorial-mono uppercase tracking-[0.18em] text-[#FF8752] font-medium">
                  FUTURE ASPIRATION
                </span>
              </div>

              <span className="text-sm font-editorial-mono text-[#FF8752]/70 uppercase tracking-wider block">
                Target Institution
              </span>
              <h3 className="font-editorial-serif text-3xl sm:text-4xl text-[#F2EEE8] font-normal mb-2">
                {journey.futureAspiration.target}
              </h3>

              <div className="space-y-1.5 mb-6">
                <p className="text-base text-[#FF8752] font-medium">
                  {journey.futureAspiration.program}
                </p>
                <p className="text-xs font-editorial-mono text-[#A6A19A]">
                  Indian Institute of Technology, Bombay
                </p>
              </div>

              <p className="text-sm text-[#A6A19A] leading-relaxed">
                {journey.futureAspiration.vision}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#FF8752]/20 flex items-center justify-between text-xs font-editorial-mono text-[#FF8752]">
              <span>MISSION: AI INNOVATION</span>
              <span>VISION 2030+</span>
            </div>
          </div>
        </div>

        {/* Vertical Detailed Timeline */}
        <div className="border-t border-white/8 pt-16">
          <h3 className="text-xs font-editorial-mono uppercase tracking-[0.2em] text-[#77736D] mb-12">
            Chronological Progression
          </h3>

          <div className="relative pl-6 md:pl-10 border-l border-white/12 space-y-12">
            {journey.timeline.map((item, index) => (
              <div key={item.title} className="relative group">
                {/* Timeline Node Icon */}
                <div
                  className={`absolute -left-[31px] md:-left-[47px] top-1 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                    item.isCurrent
                      ? "bg-emerald-500 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                      : item.isAspiration
                      ? "bg-[#FF8752] border-[#FF8752] shadow-[0_0_15px_rgba(255,135,82,0.5)]"
                      : "bg-[#111111] border-white/20 group-hover:border-white/50"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.isCurrent || item.isAspiration ? "bg-[#050505]" : "bg-white/40"
                    }`}
                  />
                </div>

                {/* Milestone Details */}
                <div className="p-6 md:p-8 rounded-2xl bg-[#0D0D0D] border border-white/8 group-hover:border-white/15 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-editorial-mono text-[#FF8752] uppercase tracking-wider">
                      {item.era} &middot; {item.organization}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-editorial-mono uppercase tracking-wider ${
                        item.isCurrent
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                          : item.isAspiration
                          ? "bg-[#FF8752]/10 text-[#FF8752] border border-[#FF8752]/30"
                          : "bg-white/5 text-[#A6A19A] border border-white/10"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="font-editorial-serif text-2xl text-[#F2EEE8] font-normal mb-2">
                    {item.title}
                  </h4>

                  <p className="text-sm text-[#A6A19A] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-editorial-mono bg-white/5 border border-white/6 text-[#D4CFCA]"
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

