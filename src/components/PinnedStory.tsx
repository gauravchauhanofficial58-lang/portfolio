"use client";

import React, { useEffect, useRef, useState } from "react";
import { Terminal, Brain, Rocket, Sparkles, ArrowRight, Layers, Cpu, Orbit } from "lucide-react";

interface StoryChapter {
  id: string;
  number: string;
  era: string;
  title: string;
  headline: string;
  description: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  graphicType: "matrix" | "neural" | "monolith";
}

const CHAPTERS: StoryChapter[] = [
  {
    id: "chapter-01",
    number: "01",
    era: "THE SPARK · ORIGIN",
    title: "Algorithmic Genesis",
    headline: "From the first line of code to computational systems.",
    description:
      "Discovered the transformative power of computing through curiosity. Moving beyond syntax into systemic architecture, mastering data structures, Python logic, and modern frontend foundations.",
    technologies: ["Python", "TypeScript", "Logic Architecture", "Algorithms"],
    metrics: [
      { label: "FOUNDATION", value: "Computer Science Core" },
      { label: "PHILOSOPHY", value: "Curiosity-Driven" },
    ],
    graphicType: "matrix",
  },
  {
    id: "chapter-02",
    number: "02",
    era: "THE HORIZON · RESEARCH",
    title: "Neural Architectures",
    headline: "Investigating autonomous neural networks & agentic cognition.",
    description:
      "Exploring deep learning mechanics, prompt engineering architectures, multi-agent coordination loops, and the engineering required to bridge language models with real-world execution.",
    technologies: ["AI & Machine Learning", "Neural Nets", "Agent Systems", "FastAPI"],
    metrics: [
      { label: "RESEARCH FOCUS", value: "Agent Coordination" },
      { label: "PARADIGM", value: "Autonomous Systems" },
    ],
    graphicType: "neural",
  },
  {
    id: "chapter-03",
    number: "03",
    era: "THE MISSION · VISION 2030+",
    title: "Enduring Purpose",
    headline: "Targeting IIT Bombay CSE — building technology that matters.",
    description:
      "A relentless commitment to rigorous mathematics, competitive problem-solving, and principled engineering — aspiring toward India's premier institution to craft meaningful technology.",
    technologies: ["IIT Bombay Aspiration", "Distributed Systems", "Spatial Web", "Future Tech"],
    metrics: [
      { label: "ACADEMIC GOAL", value: "IIT Bombay CSE" },
      { label: "MISSION", value: "Deep Tech Innovation" },
    ],
    graphicType: "monolith",
  },
];

export default function PinnedStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate progress through this pinned container
      const totalScrollable = containerHeight - windowHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      setScrollProgress(progress);

      // Determine active chapter (0, 1, or 2)
      if (progress < 0.33) {
        setActiveChapter(0);
      } else if (progress < 0.67) {
        setActiveChapter(1);
      } else {
        setActiveChapter(2);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const curr = CHAPTERS[activeChapter];

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100vh] lg:min-h-[300vh] bg-[#030503] border-t border-[#39FF14]/15 overflow-hidden"
    >
      {/* Sticky Viewport Stage for Desktop */}
      <div className="lg:sticky lg:top-0 lg:h-screen w-full flex flex-col justify-between px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Background Radial Glow that moves based on progress */}
        <div
          className="pointer-events-none absolute w-[600px] h-[600px] rounded-full blur-[160px] opacity-25 transition-all duration-700 ease-out -z-10"
          style={{
            top: `${20 + scrollProgress * 50}%`,
            left: `${15 + activeChapter * 30}%`,
            background: "radial-gradient(circle, rgba(57,255,20,0.25) 0%, rgba(9,35,19,0.15) 50%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Top Header: Section Meta & Chapter Progress Indicators */}
        <div className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#39FF14]/15 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14] animate-pulse" />
            <span className="font-editorial-mono text-xs uppercase tracking-[0.22em] text-[#39FF14]">
              CINEMATIC SCROLL STORYTELLING
            </span>
          </div>

          {/* Chapter Progression Tracker */}
          <div className="flex items-center gap-2 sm:gap-3">
            {CHAPTERS.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => {
                  if (containerRef.current) {
                    const top = containerRef.current.offsetTop;
                    const height = containerRef.current.offsetHeight - window.innerHeight;
                    window.scrollTo({
                      top: top + (idx / (CHAPTERS.length - 1)) * height,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-editorial-mono uppercase tracking-wider transition-all duration-300 ${
                  activeChapter === idx
                    ? "bg-[#39FF14] text-[#030503] font-semibold shadow-[0_0_15px_rgba(57,255,20,0.45)]"
                    : "bg-[#07150B] text-[#929B91] hover:text-[#F1F5EF] border border-[#39FF14]/20"
                }`}
              >
                <span>{ch.number}</span>
                <span className="hidden sm:inline">{ch.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Center Content: Dual Column Interactive Story Architecture */}
        <div className="max-w-7xl w-full mx-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-8">
          {/* Left Column: Narrative Headline & Editorial Text */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 transition-all duration-500">
            <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#39FF14] uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{curr.era}</span>
            </div>

            <h3 className="font-editorial-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F1F5EF] font-normal leading-[1.08] tracking-[-0.02em]">
              {curr.headline}
            </h3>

            <p className="text-sm sm:text-base md:text-lg text-[#929B91] font-sans leading-relaxed">
              {curr.description}
            </p>

            {/* Metrics HUD */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#39FF14]/15">
              {curr.metrics.map((m) => (
                <div key={m.label} className="p-3.5 rounded-xl bg-[#07150B] border border-[#39FF14]/15">
                  <span className="text-[10px] font-editorial-mono text-[#5D665C] uppercase tracking-wider block mb-1">
                    {m.label}
                  </span>
                  <span className="text-xs sm:text-sm font-editorial-mono text-[#F1F5EF] font-medium">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {curr.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-editorial-mono bg-[#092313] border border-[#39FF14]/25 text-[#39FF14]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic 3D Perspective Graphic for Active Chapter */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div
              className="relative w-full aspect-square max-w-[460px] rounded-3xl bg-[#07150B] border border-[#39FF14]/30 overflow-hidden flex flex-col justify-between p-8 shadow-2xl shadow-black transition-all duration-700"
              style={{
                transform: `perspective(1000px) rotateY(${
                  activeChapter === 0 ? -6 : activeChapter === 1 ? 0 : 6
                }deg) rotateX(4deg)`,
              }}
            >
              {/* Graphic Ambient Glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-20 transition-opacity duration-700"
                style={{
                  background: "radial-gradient(circle at 50% 50%, #39FF14 0%, transparent 65%)",
                }}
                aria-hidden="true"
              />

              {/* Top Graphic Meta */}
              <div className="flex items-center justify-between border-b border-[#39FF14]/15 pb-4 z-10">
                <span className="text-xs font-editorial-mono text-[#39FF14] uppercase tracking-wider">
                  VISUAL LAYER // {curr.number}
                </span>
                <span className="text-[10px] font-editorial-mono text-[#5D665C]">
                  {curr.graphicType.toUpperCase()} MODE
                </span>
              </div>

              {/* Graphic Representation */}
              <div className="flex-1 flex flex-col items-center justify-center my-6 z-10">
                {curr.graphicType === "matrix" ? (
                  <div className="relative w-48 h-48 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center overflow-hidden bg-[#050805]">
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20">
                      {Array.from({ length: 36 }).map((_, i) => (
                        <div key={i} className="border border-[#39FF14]/30" />
                      ))}
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-[#39FF14]/15 border border-[#39FF14]/50 flex items-center justify-center text-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.4)]">
                      <Terminal className="w-8 h-8" />
                    </div>
                  </div>
                ) : curr.graphicType === "neural" ? (
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    <div className="absolute w-44 h-44 rounded-full border border-dashed border-[#39FF14]/40 animate-spin" style={{ animationDuration: "24s" }} />
                    <div className="absolute w-32 h-32 rounded-full border border-[#75FF36]/30 animate-ping" style={{ animationDuration: "4s" }} />
                    <div className="w-20 h-20 rounded-2xl bg-[#092313] border border-[#39FF14]/60 flex items-center justify-center text-[#39FF14] shadow-[0_0_25px_rgba(57,255,20,0.5)] z-10">
                      <Brain className="w-10 h-10 animate-pulse" />
                    </div>
                  </div>
                ) : (
                  <div className="relative w-48 h-48 flex flex-col items-center justify-center">
                    <div className="w-36 h-28 rounded-2xl bg-gradient-to-b from-[#092313] to-[#07150B] border border-[#39FF14]/50 flex items-center justify-center text-[#39FF14] shadow-[0_0_30px_rgba(57,255,20,0.35)] relative overflow-hidden">
                      <div className="absolute top-0 inset-x-0 h-[2px] bg-[#39FF14] shadow-[0_0_8px_#39FF14] animate-pulse" />
                      <Rocket className="w-12 h-12 text-[#75FF36]" />
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-[10px] font-editorial-mono text-[#39FF14]">
                      <Orbit className="w-3 h-3 animate-spin" />
                      <span>IIT BOMBAY HORIZON</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Graphic HUD */}
              <div className="flex items-center justify-between border-t border-[#39FF14]/15 pt-4 text-[10px] font-editorial-mono text-[#929B91] z-10">
                <span>STAGE: ACTIVE STORY SCENE</span>
                <span className="text-[#39FF14]">SCROLL PROGRESS: {Math.round(scrollProgress * 100)}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Track Indicator */}
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between pt-4 border-t border-[#39FF14]/15 text-xs font-editorial-mono text-[#5D665C]">
          <span>CHAPTER {curr.number} OF 03</span>
          <div className="w-48 h-1.5 bg-[#07150B] rounded-full overflow-hidden border border-[#39FF14]/20">
            <div
              className="h-full bg-gradient-to-r from-[#39FF14] to-[#75FF36] transition-all duration-300 shadow-[0_0_10px_#39FF14]"
              style={{ width: `${Math.max(scrollProgress * 100, 8)}%` }}
            />
          </div>
          <span className="text-[#39FF14]">SCROLL TO PROGRESS</span>
        </div>
      </div>
    </section>
  );
}
