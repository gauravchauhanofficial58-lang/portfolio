"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, Brain, Box, Orbit, Compass, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import { useSmoothScroll } from "./SmoothScroll";

interface Chapter {
  number: string;
  tag: string;
  title: string;
  headline: string;
  description: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  fileChip: { name: string; status: string };
  codeSnippet: string;
}

const CHAPTERS: Chapter[] = [
  {
    number: "01",
    tag: "ORIGIN & SYNTAX",
    title: "Algorithmic Foundations",
    headline: "Think it. Build it.",
    description:
      "Discovered the transformative power of computing through curiosity. Moving beyond syntax into systemic architecture, mastering data structures, Python logic, and algorithmic efficiency.",
    technologies: ["Python", "Algorithms", "Data Structures", "TypeScript"],
    metrics: [
      { label: "FOUNDATION", value: "Core Computer Science" },
      { label: "PARADIGM", value: "Systemic Logic" },
    ],
    fileChip: { name: "algorithm_core.py", status: "Validated & Executed" },
    codeSnippet: `def binary_search_depth(graph, root):\n    visited, queue = set([root]), [root]\n    while queue:\n        node = queue.pop(0)\n        yield node\n        queue.extend(graph[node] - visited)`,
  },
  {
    number: "02",
    tag: "RESEARCH & COGNITION",
    title: "Neural Architectures",
    headline: "Less guessing. More understanding.",
    description:
      "Investigating neural network mechanics, transformer architectures, and autonomous cognition loops. Exploring how large language models can be steered with mathematical rigor.",
    technologies: ["PyTorch", "Transformers", "Neural Weights", "FastAPI"],
    metrics: [
      { label: "RESEARCH FOCUS", value: "Agent Cognition" },
      { label: "ARCHITECTURE", value: "Transformer Core" },
    ],
    fileChip: { name: "neural_layer.ts", status: "Trained & Converged" },
    codeSnippet: `const forwardPass = (input: Tensor) => {\n  const attention = softmax(matmul(Q, K.T) / Math.sqrt(d));\n  return matmul(attention, V).add(residual);\n};`,
  },
  {
    number: "03",
    tag: "CREATIVE & IMMERSIVE",
    title: "Spatial 3D Experiences",
    headline: "Start small. Imagine beyond.",
    description:
      "Blending editorial design with WebGL 3D math. Engineering shaders, dynamic camera choreographies, and particle systems that transform flat web pages into immersive digital worlds.",
    technologies: ["Three.js", "WebGL", "GLSL Shaders", "GSAP ScrollTrigger"],
    metrics: [
      { label: "FRAME RATE", value: "60 FPS Locked" },
      { label: "PIPELINE", value: "GPU Accelerated" },
    ],
    fileChip: { name: "catmull_spline.glsl", status: "Rendered in 3D" },
    codeSnippet: `vec3 causticGlow = mix(vec3(0.02, 0.1, 0.04), vec3(0.22, 1.0, 0.08), vUv.y);\ngl_FragColor = vec4(causticGlow * pulse, 1.0);`,
  },
  {
    number: "04",
    tag: "AUTONOMOUS WORKFLOWS",
    title: "Multi-Agent Systems",
    headline: "Say what you need. Make it reality.",
    description:
      "Designing multi-agent orchestration graphs where independent AI workers research, verify, write code, and execute tools autonomously with continuous human alignment.",
    technologies: ["Agent Orchestration", "Async Workflows", "CLI Dispatch", "Tools"],
    metrics: [
      { label: "WORKFLOW", value: "Multi-Agent Graph" },
      { label: "EXECUTION", value: "Autonomous" },
    ],
    fileChip: { name: "agent_orchestrator.py", status: "Orchestrating" },
    codeSnippet: `async def run_pipeline(task):\n    analyst = await spawn_agent('researcher')\n    coder = await spawn_agent('engineer')\n    return await coder.execute(analyst.output)`,
  },
  {
    number: "05",
    tag: "LONG-TERM HORIZON",
    title: "Enduring Purpose",
    headline: "Targeting IIT Bombay CSE.",
    description:
      "Currently in Class 8 at Awan Educational Academy (CBSE). Balancing daily academic excellence with competitive mathematics and deep tech exploration — aiming for India's premier computer science institution.",
    technologies: ["CBSE Class 8", "JEE Advanced Track", "IIT Bombay CSE", "Future Tech"],
    metrics: [
      { label: "ACADEMIC GOAL", value: "IIT Bombay CSE" },
      { label: "MISSION", value: "Deep Tech Innovation" },
    ],
    fileChip: { name: "roadmap_2030.md", status: "Active Milestone" },
    codeSnippet: `# Long-Term Trajectory\n- Stage 01: CBSE Class 8 Academic Excellence\n- Stage 02: Advanced Mathematics Olympiads\n- Stage 03: IIT JEE Advanced & IIT Bombay CSE`,
  },
];

export default function StoryDeck() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollTo } = useSmoothScroll();

  const current = CHAPTERS[activeIdx];

  // Mouse tilt on the 3D perspective card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const nextChapter = () => {
    setActiveIdx((prev) => (prev + 1) % CHAPTERS.length);
  };

  const prevChapter = () => {
    setActiveIdx((prev) => (prev - 1 + CHAPTERS.length) % CHAPTERS.length);
  };

  return (
    <section
      id="story"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-[#030503] border-t border-[#39FF14]/15 overflow-hidden"
    >
      {/* Dynamic ambient radial lighting */}
      <div
        className="pointer-events-none absolute w-[550px] h-[550px] rounded-full blur-[150px] opacity-20 -z-10 transition-all duration-700"
        style={{
          top: "20%",
          left: `${15 + activeIdx * 15}%`,
          background: "radial-gradient(circle, rgba(57,255,20,0.3) 0%, rgba(9,35,19,0.1) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[640px] gap-12">
        {/* Top Header: Section Meta & Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-[#39FF14]/15 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14] animate-pulse" />
            <span className="font-editorial-mono text-xs uppercase tracking-[0.22em] text-[#39FF14]">
              CINEMATIC SCROLL STORYTELLING
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevChapter}
              className="w-8 h-8 rounded-full bg-[#07150B] border border-[#39FF14]/20 flex items-center justify-center text-[#929B91] hover:text-[#39FF14] hover:border-[#39FF14] transition-all"
              aria-label="Previous chapter"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-editorial-mono text-[#929B91] px-2">
              {current.number} / {CHAPTERS.length < 10 ? `0${CHAPTERS.length}` : CHAPTERS.length}
            </span>
            <button
              onClick={nextChapter}
              className="w-8 h-8 rounded-full bg-[#07150B] border border-[#39FF14]/20 flex items-center justify-center text-[#929B91] hover:text-[#39FF14] hover:border-[#39FF14] transition-all"
              aria-label="Next chapter"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center Stage: Dual Column Narrative & 3D Interactive Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center flex-1 my-4">
          {/* Left Column: Narrative Headline & Editorial Text */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07150B] border border-[#39FF14]/25 w-fit">
              <span className="text-xs font-editorial-mono tracking-wider text-[#75FF36]">
                {current.tag}
              </span>
            </div>

            <h2 className="font-editorial-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F1F5EF] leading-[1.14]">
              {current.headline.split(".")[0]}. <br />
              <span className="text-[#39FF14] drop-shadow-[0_0_20px_rgba(57,255,20,0.35)]">
                {current.headline.split(".")[1] || current.title}
              </span>
            </h2>

            <p className="text-sm sm:text-base font-sans text-[#929B91] font-light leading-relaxed">
              {current.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {current.metrics.map((m, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#07150B]/80 border border-[#39FF14]/15">
                  <span className="text-[10px] font-editorial-mono tracking-wider text-[#929B91] uppercase block">
                    {m.label}
                  </span>
                  <span className="text-base font-editorial-mono text-[#F1F5EF] font-semibold mt-1 block">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Technology tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {current.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-[#07150B] border border-[#39FF14]/15 text-xs font-editorial-mono text-[#929B91]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Perspective Floating Code & Telemetry Window */}
          <div
            className="lg:col-span-7 flex justify-center items-center"
            onMouseMove={handleMouseMove}
          >
            <div
              className="relative w-full max-w-[580px] rounded-2xl bg-[#07150B] border-2 border-[#39FF14]/30 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(57,255,20,0.15)] overflow-hidden transition-transform duration-300 ease-out flex flex-col"
              style={{
                perspective: "1200px",
                transform: `rotateY(${mousePos.x * 10}deg) rotateX(${mousePos.y * -8}deg)`,
              }}
            >
              {/* Window Header */}
              <div className="w-full h-9 bg-[#050805] border-b border-[#39FF14]/15 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <span className="text-[11px] font-editorial-mono text-[#929B91] ml-2">
                    {current.fileChip.name}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-editorial-mono text-[#39FF14]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-ping" />
                  <span>LIVE</span>
                </div>
              </div>

              {/* Code / Architecture Display */}
              <div className="p-6 font-editorial-mono text-xs text-[#75FF36] leading-relaxed bg-[#030503]/90 overflow-x-auto min-h-[220px] flex flex-col justify-between">
                <pre className="text-[11px] sm:text-xs text-[#F1F5EF] font-editorial-mono whitespace-pre font-light">
                  <code>{current.codeSnippet}</code>
                </pre>

                {/* Floating status card chip */}
                <div className="mt-4 p-3 rounded-xl bg-[#07150B] border border-[#39FF14]/25 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#39FF14]/15 border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14]">
                      <Terminal className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-editorial-mono text-[#F1F5EF] font-medium block">
                        {current.fileChip.name}
                      </span>
                      <span className="text-[9px] font-editorial-mono text-[#929B91] block">
                        {current.fileChip.status}
                      </span>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-[#39FF14]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Persistent Chapter Navigation Bar matching 28s-46s */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#39FF14]/15 pt-6">
          <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#929B91]">
            <span>Keep scrolling</span>
            <span className="text-[#39FF14] animate-bounce">↓</span>
          </div>

          {/* Chapter Pills: 01, 02, 03, 04, 05 */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            {CHAPTERS.map((ch, idx) => (
              <button
                key={ch.number}
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs font-editorial-mono transition-all duration-300 ${
                  activeIdx === idx
                    ? "bg-[#39FF14] text-[#030503] font-semibold shadow-[0_0_15px_rgba(57,255,20,0.5)]"
                    : "bg-[#07150B] text-[#929B91] hover:text-[#F1F5EF] border border-[#39FF14]/20"
                }`}
              >
                <span>{ch.number}</span>
                <span className="hidden md:inline">{ch.title}</span>
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-editorial-mono text-[#929B91]">
            <span>Active Stage:</span>
            <span className="text-[#39FF14]">{current.tag}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
