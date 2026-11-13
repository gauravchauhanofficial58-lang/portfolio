"use client";

import React, { useState } from "react";
import { ArrowUpRight, Sparkles, Layers, Terminal, Box } from "lucide-react";
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
            <div className="flex items-center gap-3 text-xs font-editorial-mono uppercase tracking-[0.22em] text-[#FF8752] mb-4">
              <span className="w-6 h-[1px] bg-[#FF8752]" />
              <span>02 / SELECTED WORK</span>
            </div>
            <h2 className="font-editorial-serif text-4xl sm:text-5xl md:text-6xl text-[#F2EEE8] font-normal tracking-[-0.02em]">
              Explorations &amp; Prototypes.
            </h2>
          </div>
          <p className="max-w-md text-sm font-editorial-mono text-[#A6A19A] leading-relaxed">
            A curated collection of experimental interfaces, intelligent automation concepts, and kinetic systems built to explore modern digital craft.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-[#0D0D0D] border border-white/8 hover:border-[#FF8752]/40 transition-all duration-500 overflow-hidden p-6 sm:p-8 md:p-10"
              >
                {/* Background Ambient Glow */}
                <div
                  className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 rounded-full blur-[100px] opacity-15 group-hover:opacity-30 transition-opacity duration-700"
                  style={{ background: project.accent }}
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Project Info */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between gap-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      {/* Meta info: Number, Year, Category & Status */}
                      <div className="flex flex-wrap items-center gap-3 text-xs font-editorial-mono text-[#77736D] mb-4">
                        <span className="text-[#FF8752] font-semibold">
                          0{index + 1}
                        </span>
                        <span>/</span>
                        <span>{project.year}</span>
                        <span>/</span>
                        <span className="text-[#A6A19A]">{project.category}</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-[#FF8752]">
                          {project.status}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="font-editorial-serif text-3xl sm:text-4xl md:text-5xl text-[#F2EEE8] font-normal group-hover:text-[#FF8752] transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm font-editorial-serif italic text-[#A6A19A]">
                        {project.tagline}
                      </p>

                      {/* Description */}
                      <p className="mt-4 text-sm sm:text-base text-[#A6A19A] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-editorial-mono bg-white/5 border border-white/8 text-[#D4CFCA] group-hover:border-white/15 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/8">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-[#FF8752] hover:text-[#050505] text-[#F2EEE8] text-xs font-editorial-mono uppercase tracking-[0.14em] font-medium transition-all duration-300"
                      >
                        <span>Inspect Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/8 text-[#A6A19A] hover:text-[#F2EEE8] transition-colors"
                        aria-label={`View ${project.title} source code`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Visual Geometric Canvas Mockup */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative w-full aspect-[16/10] rounded-2xl bg-[#141414] border border-white/10 overflow-hidden flex flex-col justify-between p-6 transition-all duration-500 group-hover:scale-[1.01] group-hover:border-[#FF8752]/30">
                      {/* Top Bar Mockup */}
                      <div className="flex items-center justify-between border-b border-white/8 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                          <span className="ml-2 text-[10px] font-editorial-mono text-[#77736D]">
                            {project.id}.gaurav.dev
                          </span>
                        </div>
                        <span className="text-[10px] font-editorial-mono uppercase tracking-wider text-[#FF8752]">
                          {project.highlight}
                        </span>
                      </div>

                      {/* Visual Graphic Representation */}
                      <div className="flex-1 flex flex-col items-center justify-center py-6">
                        <div className="relative flex items-center justify-center">
                          {/* Concentric circles or geometric wireframe preview */}
                          <div
                            className="w-32 h-32 rounded-full border border-dashed border-white/15 flex items-center justify-center animate-spin"
                            style={{ animationDuration: "25s" }}
                          >
                            <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center">
                              <Box className="w-8 h-8 text-[#FF8752]" />
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 text-center">
                          <span className="font-editorial-serif text-lg text-[#F2EEE8] font-light">
                            {project.title}
                          </span>
                          <p className="text-[11px] font-editorial-mono text-[#77736D] mt-0.5">
                            {project.category}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Info Strip */}
                      <div className="flex items-center justify-between text-[11px] font-editorial-mono text-[#77736D] pt-3 border-t border-white/8">
                        <span>SYS: RUNNING</span>
                        <span>LATENCY: OPTIMAL</span>
                        <span className="text-[#FF8752]">2026 RELEASE</span>
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
          className="fixed inset-0 z-50 bg-[#050505]/90 backdrop-blur-xl flex items-center justify-center p-4"
        >
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#111111] border border-white/15 p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-editorial-mono uppercase tracking-wider text-[#FF8752]">
                  {activeProject.category} &middot; {activeProject.year}
                </span>
                <h3 className="font-editorial-serif text-3xl sm:text-4xl text-[#F2EEE8] font-normal mt-1">
                  {activeProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#F2EEE8] transition-colors"
                aria-label="Close project modal"
              >
                ✕
              </button>
            </div>

            <p className="text-sm sm:text-base text-[#A6A19A] leading-relaxed">
              {activeProject.description}
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/8">
              <h4 className="text-xs font-editorial-mono uppercase tracking-wider text-[#77736D] mb-2">
                Technical Stack &amp; Exploratory Focus
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-editorial-mono bg-white/5 border border-white/10 text-[#F2EEE8]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-xs font-editorial-mono text-[#77736D] flex items-center justify-between pt-4 border-t border-white/10">
              <span>CONFIG: EDITABLE VIA `src/data/portfolioData.ts`</span>
              <button
                onClick={() => setActiveProject(null)}
                className="px-4 py-2 rounded-full bg-[#FF8752] text-[#050505] font-semibold tracking-wider hover:bg-[#FFA375] transition-colors"
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
