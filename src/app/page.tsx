"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
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
      <div className="relative min-h-screen flex flex-col selection:bg-[#FF8752] selection:text-[#050505]">
        {/* Floating Rounded Navigation Bar */}
        <Navbar onMotionToggle={toggleMotion} motionEnabled={motionEnabled} />

        {/* Main Content Sections */}
        <main className="flex-1 w-full flex flex-col">
          <Hero motionEnabled={motionEnabled} />
          <About />
          <Projects />
          <Skills />
          <Explore />
          <Journey />
          <Contact />
        </main>

        {/* Minimal Editorial Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
