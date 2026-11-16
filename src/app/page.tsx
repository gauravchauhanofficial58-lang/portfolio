"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Workspace3D from "@/components/Workspace3D";
import About from "@/components/About";
import StoryDeck from "@/components/StoryDeck";
import SpeedComparison from "@/components/SpeedComparison";
import Projects from "@/components/Projects";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import Skills from "@/components/Skills";
import Explore from "@/components/Explore";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

// Dynamically import Three.js background for SSR safety and maximum performance
const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), {
  ssr: false,
});

export default function Home() {
  const [motionEnabled, setMotionEnabled] = useState(true);

  // Initialize preference from system / storage
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setMotionEnabled(false);
    }
  }, []);

  const toggleMotion = () => {
    setMotionEnabled((prev) => !prev);
  };

  return (
    <SmoothScroll enabled={motionEnabled}>
      {/* Custom Desktop Interactive Cursor */}
      <CustomCursor enabled={motionEnabled} />

      {/* Subtle Noise Texture Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Interactive 3D Ambient WebGL Canvas */}
      <ThreeBackground motionEnabled={motionEnabled} />

      {/* Main Experience Layout */}
      <div className="relative min-h-screen flex flex-col selection:bg-[#39FF14] selection:text-[#030503] overflow-x-hidden">
        {/* Floating Rounded Navigation Bar */}
        <Navbar onMotionToggle={toggleMotion} motionEnabled={motionEnabled} />

        {/* Main Content Sections: High-End Cinematic 3D Rhythm */}
        <main className="flex-1 w-full flex flex-col overflow-x-hidden">
          {/* Scene 01: Hero 3D (Monumental + Portrait + Light Ribbon + Reticle) */}
          <Hero motionEnabled={motionEnabled} />

          {/* Scene 03: 3D Laptop Workstation with rotating Neural Sphere & Telemetry */}
          <Workspace3D />

          {/* Builder Profile Console */}
          <About />

          {/* Scene 04: Pinned 3D Story Deck with 01-05 Chapters & 3D Code Window */}
          <StoryDeck />

          {/* Scene 05: Interactive Draggable Before/After Speed Comparison Split Slider */}
          <SpeedComparison />

          {/* Flagship Projects with 3D Tilt & Interactive Consoles */}
          <Projects />

          {/* Scene 06: Absolute Control. Zero Friction. 4 Pillars System Grid */}
          <CapabilitiesGrid />

          {/* Core Technical Capabilities & Competencies */}
          <Skills />

          {/* Emerging Technology Exploration Domains */}
          <Explore />

          {/* Academic Journey & IIT Bombay CSE Long-Term Trajectory */}
          <Journey />

          {/* Interactive Transmission Console & Direct Connection */}
          <Contact />
        </main>

        {/* Scene 08: Monumental Watermark Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
