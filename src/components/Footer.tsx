"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = React.useState(2026);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full py-16 px-4 md:px-8 border-t border-white/8 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Row: Brand & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-editorial-serif text-3xl sm:text-4xl tracking-[0.14em] text-[#F2EEE8] font-medium block">
              GAURAV
            </span>
            <span className="text-xs font-editorial-mono tracking-[0.22em] text-[#FF8752] uppercase mt-1 block">
              BUILDING. LEARNING. EXPLORING.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 hover:bg-[#FF8752] hover:text-[#050505] border border-white/10 text-xs font-editorial-mono uppercase tracking-[0.18em] text-[#A6A19A] hover:text-[#050505] transition-all duration-300"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <div className="w-5 h-5 rounded-full bg-white/10 group-hover:bg-[#050505]/20 flex items-center justify-center transition-colors">
              <ArrowUp className="w-3 h-3 transition-transform group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>

        {/* Huge Aesthetic Editorial Watermark */}
        <div className="w-full select-none pointer-events-none py-6 border-y border-white/6 overflow-hidden">
          <p className="font-editorial-serif text-[12vw] sm:text-[10vw] font-normal tracking-[-0.03em] text-[#F2EEE8]/5 leading-none text-center whitespace-nowrap">
            GAURAV &middot; INDIA &middot; FUTURE
          </p>
        </div>

        {/* Bottom Row: Dynamic Copyright, Location, System Status */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-editorial-mono text-[#77736D]">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear} GAURAV.</span>
            <span>ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#A6A19A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8752]" />
              LOCATION: INDIA
            </span>
            <span>&middot;</span>
            <span>DESIGNED WITH CINEMATIC PRECISION</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
