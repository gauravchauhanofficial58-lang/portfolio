"use client";

import React, { useState } from "react";
import { ArrowUpRight, Box, Cpu, Network, Workflow, ExternalLink, X, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="work"
      className="relative w-full py-28 md:py-36 px-4 md:px-8 border-t border-[#39FF14]/15 bg-[#030503]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 text-xs font-editorial-mono uppercase tracking-[0.22em] text-[#39FF14] mb-4">
              <span className="w-6 h-[1px] bg-[#39FF14]" />
              <span>02 / SELECTED WORK</span>
            </div>
            <h2 className="font-editorial-serif text-4xl sm:text-5xl md:text-6xl text-[#F1F5EF] font-normal tracking-[-0.02em]">
              Explorations &amp; Prototypes.
            </h2>
          </div>
          <p className="max-w-md text-sm font-editorial-mono text-[#929B91] leading-relaxed">
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
                className="group relative rounded-3xl bg-[#07150B] border border-[#39FF14]/15 hover:border-[#39FF14]/50 transition-all duration-500 overflow-hidden p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/80"
              >
                {/* Background Ambient Accent Glow */}
                <div
                  className="pointer-events-none absolute -right-24 -top-24 w-80 h-80 rounded-full blur-[110px] opacity-15 group-hover:opacity-30 transition-opacity duration-700"
                  style={{ background: "#39FF14" }}
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
                      <div className="flex flex-wrap items-center gap-3 text-xs font-editorial-mono text-[#5D665C] mb-4">
                        <span className="text-[#39FF14] font-semibold">
                          0{index + 1}
                        </span>
                        <span>/</span>
                        <span>{project.year}</span>
                        <span>/</span>
                        <span className="text-[#929B91]">{project.category}</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/25 text-[10px] text-[#39FF14] font-medium">
                          {project.status}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="font-editorial-serif text-3xl sm:text-4xl md:text-5xl text-[#F1F5EF] font-normal group-hover:text-[#39FF14] transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm font-editorial-serif italic text-[#929B91]">
                        {project.tagline}
                      </p>

                      {/* Description */}
                      <p className="mt-4 text-sm sm:text-base text-[#929B91] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-editorial-mono bg-white/[0.04] border border-[#39FF14]/15 text-[#D4CFCA] group-hover:border-[#39FF14]/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Triggers */}
                    <div className="flex items-center gap-4 pt-4 border-t border-[#39FF14]/10">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-[#39FF14] hover:text-[#030503] text-[#F1F5EF] text-xs font-editorial-mono uppercase tracking-[0.14em] font-medium transition-all duration-300 cursor-pointer shadow-sm"
                      >
                        <span>Inspect Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-full bg-white/5 hover:bg-[#39FF14]/15 border border-[#39FF14]/20 text-[#929B91] hover:text-[#39FF14] transition-colors"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-full bg-white/5 hover:bg-[#39FF14]/15 border border-[#39FF14]/20 text-[#929B91] hover:text-[#39FF14] transition-colors"
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
                    <div className="relative w-full aspect-[16/10] rounded-2xl bg-[#050805] border border-[#39FF14]/20 overflow-hidden flex flex-col justify-between p-6 transition-all duration-500 group-hover:scale-[1.01] group-hover:border-[#39FF14]/50 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
                      {/* Top Bar Mockup */}
                      <div className="flex items-center justify-between border-b border-[#39FF14]/10 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14]/70" />
                          <span className="ml-2 text-[10px] font-editorial-mono text-[#5D665C]">
                            lab // {project.id}
                          </span>
                        </div>
                        <span className="text-[10px] font-editorial-mono uppercase tracking-wider text-[#39FF14] font-medium">
                          {project.highlight}
                        </span>
                      </div>

                      {/* Visual Graphic Representation */}
                      <div className="flex-1 flex flex-col items-center justify-center py-6">
                        {project.id === "agent-sandbox" ? (
                          <div className="relative flex items-center justify-center gap-6">
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-12 h-12 rounded-xl bg-white/5 border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.2)]">
                                <Network className="w-6 h-6 animate-pulse" />
                              </div>
                              <span className="text-[9px] font-editorial-mono text-[#5D665C]">ORCHESTRATOR</span>
                            </div>
                            <div className="w-8 h-[1px] bg-gradient-to-r from-[#39FF14] to-white/20" />
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-12 h-12 rounded-xl bg-[#39FF14]/10 border border-[#39FF14]/40 flex items-center justify-center text-[#39FF14]">
                                <Cpu className="w-6 h-6" />
                              </div>
                              <span className="text-[9px] font-editorial-mono text-[#39FF14]">AGENT RUNTIME</span>
                            </div>
                          </div>
                        ) : project.id === "spatial-3d" ? (
                          <div className="relative flex items-center justify-center">
                            <div
                              className="w-28 h-28 rounded-full border border-dashed border-[#39FF14]/40 flex items-center justify-center animate-spin"
                              style={{ animationDuration: "20s" }}
                            >
                              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
                                <Box className="w-7 h-7 text-[#39FF14]" />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="relative flex items-center justify-center gap-4">
                            <div className="w-24 h-16 rounded-xl bg-white/5 border border-[#39FF14]/25 flex flex-col justify-center items-center text-center p-2">
                              <Workflow className="w-5 h-5 text-[#39FF14] mb-1" />
                              <span className="text-[8px] font-editorial-mono text-[#929B91]">EVENT QUEUE</span>
                            </div>
                            <div className="w-8 h-[1px] bg-white/15" />
                            <div className="w-24 h-16 rounded-xl bg-white/5 border border-[#39FF14]/25 flex flex-col justify-center items-center text-center p-2">
                              <Terminal className="w-5 h-5 text-[#75FF36] mb-1" />
                              <span className="text-[8px] font-editorial-mono text-[#929B91]">CLI DISPATCH</span>
                            </div>
                          </div>
                        )}

                        <div className="mt-4 text-center">
                          <span className="font-editorial-serif text-lg text-[#F1F5EF] font-light">
                            {project.title}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Footer Info */}
                      <div className="flex items-center justify-between border-t border-[#39FF14]/10 pt-3 text-[10px] font-editorial-mono text-[#5D665C]">
                        <span>STATUS: {project.status.toUpperCase()}</span>
                        <span className="text-[#39FF14]">VERIFIED ARCHITECTURE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Architectural Deep-Dive Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#030503]/90 backdrop-blur-xl"
        >
          <div className="relative max-w-2xl w-full p-8 rounded-3xl bg-[#07150B] border border-[#39FF14]/30 shadow-2xl shadow-black">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-[#929B91] hover:text-[#39FF14] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-editorial-mono text-[#39FF14] uppercase tracking-wider block mb-2">
              Architecture Analysis &middot; {activeProject.year}
            </span>

            <h3 id="modal-title" className="font-editorial-serif text-3xl text-[#F1F5EF] font-normal mb-2">
              {activeProject.title}
            </h3>

            <p className="text-sm font-editorial-serif italic text-[#929B91] mb-6">
              {activeProject.tagline}
            </p>

            <p className="text-sm text-[#D4CFCA] leading-relaxed mb-6">
              {activeProject.description}
            </p>

            <div className="mb-6">
              <span className="text-xs font-editorial-mono uppercase tracking-wider text-[#5D665C] block mb-2">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {activeProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-editorial-mono bg-[#092313] border border-[#39FF14]/20 text-[#39FF14]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-[#39FF14]/15">
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#39FF14] text-[#030503] font-semibold text-xs font-editorial-mono uppercase tracking-wider hover:bg-[#75FF36] transition-all shadow-[0_0_15px_rgba(57,255,20,0.4)]"
              >
                <span>View Source</span>
                <GithubIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F1F5EF] text-xs font-editorial-mono uppercase tracking-wider transition-colors"
              >
                <span>Live View</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
