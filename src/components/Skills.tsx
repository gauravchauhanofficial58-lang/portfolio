"use client";

import React, { useState } from "react";
import { Brain, Code, Cpu, Layout, Sparkles, Terminal, Video, GitBranch, Layers } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterOptions = [
    { id: "all", label: "All Skills & Tools" },
    { id: "ai", label: "AI & Logic" },
    { id: "web", label: "Web Architecture" },
    { id: "product", label: "Product & Craft" },
  ];

  const getFilteredCategories = () => {
    if (selectedFilter === "ai") return skills.filter((c) => c.category.includes("Artificial"));
    if (selectedFilter === "web") return skills.filter((c) => c.category.includes("Web"));
    if (selectedFilter === "product") return skills.filter((c) => c.category.includes("Product"));
    return skills;
  };

  const getSkillIcon = (name: string) => {
    if (name.includes("Artificial") || name.includes("AI")) return Brain;
    if (name.includes("Python")) return Terminal;
    if (name.includes("Prompt")) return Sparkles;
    if (name.includes("React") || name.includes("Next")) return Code;
    if (name.includes("JavaScript")) return Cpu;
    if (name.includes("HTML") || name.includes("CSS")) return Layout;
    if (name.includes("UI/UX")) return Layers;
    if (name.includes("Video")) return Video;
    if (name.includes("Git")) return GitBranch;
    return Code;
  };

  return (
    <section
      id="skills"
      className="relative w-full py-28 md:py-36 px-4 md:px-8 border-t border-white/8 bg-[#070707]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 text-xs font-editorial-mono uppercase tracking-[0.22em] text-[#FF8752] mb-4">
              <span className="w-6 h-[1px] bg-[#FF8752]" />
              <span>03 / CAPABILITIES</span>
            </div>
            <h2 className="font-editorial-serif text-4xl sm:text-5xl md:text-6xl text-[#F2EEE8] font-normal tracking-[-0.02em]">
              Skills &amp; Technology Stack.
            </h2>
          </div>
          <p className="max-w-md text-sm font-editorial-mono text-[#A6A19A] leading-relaxed">
            Technologies and concepts actively explored, practiced, and integrated into practical projects and prototypes.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-xs font-editorial-mono uppercase tracking-wider transition-all duration-300 ${
                selectedFilter === filter.id
                  ? "bg-[#FF8752] text-[#050505] font-semibold shadow-[0_0_20px_rgba(255,135,82,0.35)]"
                  : "bg-white/5 text-[#A6A19A] hover:text-[#F2EEE8] hover:bg-white/10 border border-white/8"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {getFilteredCategories().map((cat) => (
            <div key={cat.category} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/8 pb-3">
                <h3 className="font-editorial-serif text-2xl sm:text-3xl text-[#F2EEE8] font-light">
                  {cat.category}
                </h3>
                <span className="text-xs font-editorial-mono text-[#77736D]">
                  {cat.description}
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill) => {
                  const Icon = getSkillIcon(skill.name);

                  return (
                    <div
                      key={skill.name}
                      className="group relative p-6 rounded-2xl bg-[#0F0F0F] border border-white/8 hover:border-[#FF8752]/40 hover:bg-[#141414] transition-all duration-300 flex flex-col justify-between min-h-[140px]"
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-white/5 group-hover:bg-[#FF8752]/10 flex items-center justify-center text-[#FF8752] transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-editorial-serif text-lg text-[#F2EEE8] font-medium leading-tight">
                              {skill.name}
                            </h4>
                            <span className="text-[11px] font-editorial-mono text-[#77736D] uppercase tracking-wider">
                              {skill.level}
                            </span>
                          </div>
                        </div>
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF8752] group-hover:scale-150 transition-transform" />
                        )}
                      </div>

                      <p className="text-xs text-[#A6A19A] font-sans leading-relaxed border-t border-white/6 pt-3 mt-auto">
                        {skill.context}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
