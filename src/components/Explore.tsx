"use client";

import React, { useState } from "react";
import { ArrowUpRight, Cpu, Globe, Palette, Cloud, Workflow, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Explore() {
  const { exploration } = PORTFOLIO_DATA;
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const getIcon = (idx: number) => {
    const icons = [Cpu, Globe, Palette, Cloud, Workflow, Sparkles];
    return icons[idx % icons.length];
  };

  return (
    <section
      id="explore"
      className="relative w-full py-28 md:py-36 px-4 md:px-8 border-t border-white/8 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 text-xs font-editorial-mono uppercase tracking-[0.22em] text-[#FF8752] mb-4">
              <span className="w-6 h-[1px] bg-[#FF8752]" />
              <span>04 / HORIZONS</span>
            </div>
            <h2 className="font-editorial-serif text-4xl sm:text-5xl md:text-6xl text-[#F2EEE8] font-normal tracking-[-0.02em]">
              What I Explore.
            </h2>
          </div>
          <p className="max-w-md text-sm font-editorial-mono text-[#A6A19A] leading-relaxed">
            Six focal domains where curiosity meets technical practice — exploring how software, algorithms, and design will shape tomorrow.
          </p>
        </div>

        {/* 6 Cards Grid (2 cols on tablet/desktop, 3 on large) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exploration.map((item, idx) => {
            const Icon = getIcon(idx);
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={item.number}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative p-8 rounded-3xl bg-[#0D0D0D] border border-white/8 hover:border-[#FF8752]/40 transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Radial Glow on hover */}
                <div
                  className="pointer-events-none absolute -bottom-12 -right-12 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-25 transition-opacity duration-500"
                  style={{ background: "#FF8752" }}
                  aria-hidden="true"
                />

                <div>
                  {/* Top: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-editorial-serif text-2xl text-[#FF8752] font-light">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#FF8752]/40 flex items-center justify-center text-[#A6A19A] group-hover:text-[#FF8752] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-editorial-serif text-2xl sm:text-3xl text-[#F2EEE8] font-normal mb-1 group-hover:text-[#FF8752] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-editorial-mono text-[#77736D] uppercase tracking-wider block mb-4">
                    {item.subtitle}
                  </span>

                  {/* Explanation */}
                  <p className="text-sm text-[#A6A19A] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Tech Pills */}
                <div className="pt-6 border-t border-white/8 flex flex-col gap-3">
                  <span className="text-[10px] font-editorial-mono text-[#77736D] uppercase tracking-wider">
                    Core Focus: {item.focus}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-editorial-mono bg-white/5 text-[#D4CFCA]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

