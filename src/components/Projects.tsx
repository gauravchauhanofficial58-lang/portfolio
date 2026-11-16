"use client";

import React, { useState } from "react";
import { ArrowUpRight, Sparkles, Layers, Terminal, Box, Cpu, Network, Workflow, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="work"
      className="relative w-full py-28 md:py-36 px-4 md:px-8 border-t border-white/8 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 text-xs font-editorial-mono uppercase tracking-[0.22em] text-[#FF8050] mb-4">
              <span className="w-6 h-[1px] bg-[#FF8050]" />
              <span>02 / SELECTED WORK</span>
            </div>
            <h2 className="font-editorial-serif text-4xl sm:text-5xl md:text-6xl text-[#F2EEE7] font-normal tracking-[-0.02em]">
              Explorations &amp; Prototypes.
            </h2>
          </div>
          <p className="max-w-md text-sm font-editorial-mono text-[#96918C] leading-relaxed">
            A curated collection of experimental interfaces, intelligent automation concepts, and kinetic systems built to explore modern digital craft.
          </p>
        </div>

        {/* Project Cards Grid with Asymmetric Layout */}
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-[#0B0B0B] border border-white/8 hover:border-[#FF8050]/40 transition-all duration-500 overflow-hidden p-6 sm:p-8 md:p-10 shadow-2xl"
              >
                {/* Background Ambient Accent Glow */}
                <div
                  className="pointer-events-none absolute -right-24 -top-24 w-80 h-80 rounded-full blur-[110px] opacity-15 group-hover:opacity-30 transition-opacity duration-700"
                  style={{ background: project.accent }}
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Info Column */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between gap-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      {/* Meta info: Number, Year, Category & Status */}
                      <div className="flex flex-wrap items-center gap-3 text-xs font-editorial-mono text-[#6E6963] mb-4">
                        <span className="text-[#FF8050] font-semibold">
                          0{index + 1}
                        </span>
                        <span>/</span>
                        <span>{project.year}</span>
                        <span>/</span>
                        <span className="text-[#96918C]">{project.category}</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-[#FF8050]">
                          {project.status}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="font-editorial-serif text-3xl sm:text-4xl md:text-5xl text-[#F2EEE7] font-normal group-hover:text-[#FF8050] transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm font-editorial-serif italic text-[#96918C]">
                        {project.tagline}
                      </p>

                      {/* Description */}
                      <p className="mt-4 text-sm sm:text-base text-[#96918C] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-editorial-mono bg-white/[0.04] border border-white/8 text-[#D4CFCA] group-hover:border-white/15 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Triggers */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/8">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-[#FF8050] hover:text-[#050505] text-[#F2EEE7] text-xs font-editorial-mono uppercase tracking-[0.14em] font-medium transition-all duration-300 cursor-pointer"
                      >
                        <span>Inspect Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/8 text-[#96918C] hover:text-[#F2EEE7] transition-colors"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/8 text-[#96918C] hover:text-[#FF8050] transition-colors"
                        aria-label={`View ${project.title} live experience`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Visual Mockup & Interactive 3D Perspective Graphic */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative w-full aspect-[16/10] rounded-2xl bg-[#111111] border border-white/10 overflow-hidden flex flex-col justify-between p-6 transition-all duration-500 group-hover:scale-[1.01] group-hover:border-[#FF8050]/35 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                      {/* Top Bar Mockup */}
                      <div className="flex items-center justify-between border-b border-white/8 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                          <span className="ml-2 text-[10px] font-editorial-mono text-[#6E6963]">
                            lab // {project.id}
                          </span>
                        </div>
                        <span className="text-[10px] font-editorial-mono uppercase tracking-wider text-[#FF8050]">
                          {project.highlight}
                        </span>
                      </div>

                      {/* Visual Graphic Representation */}
                      <div className="flex-1 flex flex-col items-center justify-center py-6">
                        {project.id === "agent-sandbox" ? (
                          <div className="relative flex items-center justify-center gap-6">
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF8050]">
                                <Network className="w-6 h-6 animate-pulse" />
                              </div>
                              <span className="text-[9px] font-editorial-mono text-[#6E6963]">ORCHESTRATOR</span>
                            </div>
                            <div className="w-8 h-[1px] bg-gradient-to-r from-[#FF8050] to-white/20" />
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-12 h-12 rounded-xl bg-[#FF8050]/10 border border-[#FF8050]/30 flex items-center justify-center text-[#FF8050]">
                                <Cpu className="w-6 h-6" />
                              </div>
                              <span className="text-[9px] font-editorial-mono text-[#FF8050]">AGENT RUNTIME</span>
                            </div>
                          </div>
                        ) : project.id === "spatial-3d" ? (
                          <div className="relative flex items-center justify-center">
                            <div
                              className="w-28 h-28 rounded-full border border-dashed border-[#FF8050]/40 flex items-center justify-center animate-spin"
                              style={{ animationDuration: "20s" }}
                            >
                              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
                                <Box className="w-7 h-7 text-[#FF8050]" />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="relative flex items-center justify-center gap-4">
                            <div className="w-24 h-16 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center items-center text-center p-2">
                              <Workflow className="w-5 h-5 text-[#FF8050] mb-1" />
                              <span className="text-[8px] font-editorial-mono text-[#96918C]">EVENT QUEUE</span>
                            </div>
                            <div className="w-8 h-[1px] bg-white/15" />
                            <div className="w-24 h-16 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center items-center text-center p-2">
                              <Terminal className="w-5 h-5 text-emerald-400 mb-1" />
                              <span className="text-[8px] font-editorial-mono text-[#96918C]">CLI DISPATCH</span>
                            </div>
                          </div>
                        )}

                        <div className="mt-4 text-center">
                          <span className="font-editorial-serif text-lg text-[#F2EEE7] font-light">
                            {project.title}
                          </span>
                          <p className="text-[11px] font-editorial-mono text-[#6E6963] mt-0.5">
                            {project.category}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Info Strip */}
                      <div className="flex items-center justify-between text-[11px] font-editorial-mono text-[#6E6963] pt-3 border-t border-white/8">
                        <span>ARCH: CONCEPT</span>
                        <span>BUILD: EXPERIMENTAL</span>
                        <span className="text-[#FF8050]">2026 HORIZON</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
          className="fixed inset-0 z-50 bg-[#050505]/92 backdrop-blur-xl flex items-center justify-center p-4"
        >
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#0F0F0F] border border-white/15 p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-editorial-mono uppercase tracking-wider text-[#FF8050]">
                  {activeProject.category} &middot; {activeProject.year}
                </span>
                <h3 className="font-editorial-serif text-3xl sm:text-4xl text-[#F2EEE7] font-normal mt-1">
                  {activeProject.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#F2EEE7] transition-colors cursor-pointer"
                aria-label="Close project modal"
              >
                ✕
              </button>
            </div>

            <p className="text-sm sm:text-base text-[#96918C] leading-relaxed">
              {activeProject.description}
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/8">
              <h4 className="text-xs font-editorial-mono uppercase tracking-wider text-[#6E6963] mb-2">
                Technical Stack &amp; Exploratory Focus
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-editorial-mono bg-white/5 border border-white/10 text-[#F2EEE7]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-xs font-editorial-mono text-[#6E6963] flex items-center justify-between pt-4 border-t border-white/10">
              <span>PROJECT CODEBASE: ACTIVE WORKSPACE</span>
              <button
                onClick={() => setActiveProject(null)}
                className="px-5 py-2 rounded-full bg-[#FF8050] text-[#050505] font-semibold tracking-wider hover:bg-[#FFA375] transition-colors cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
