"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onMotionToggle?: () => void;
  motionEnabled?: boolean;
}

export default function Navbar({ onMotionToggle, motionEnabled = true }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section detection
      const sections = ["hero", "work", "about", "skills", "journey", "contact"];
      const scrollPos = window.scrollY + 280;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { label: "WORK", id: "work" },
    { label: "ABOUT", id: "about" },
    { label: "SKILLS", id: "skills" },
    { label: "JOURNEY", id: "journey" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none transition-all duration-300">
        <nav
          className={`pointer-events-auto flex items-center justify-between transition-all duration-300 ease-out ${
            isScrolled
              ? "py-2.5 px-5 md:px-7 rounded-full bg-[#07150B]/85 backdrop-blur-xl border border-[#39FF14]/20 shadow-2xl shadow-black/90 w-full max-w-4xl"
              : "py-3.5 px-6 md:px-8 rounded-full bg-[#050805]/75 backdrop-blur-md border border-[#39FF14]/15 w-full max-w-5xl"
          }`}
          aria-label="Primary navigation"
        >
          {/* Logo / Brand Name */}
          <button
            onClick={() => scrollTo("hero")}
            className="group flex items-center gap-2 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#39FF14] rounded-full px-1"
            aria-label="Scroll to top"
          >
            <span className="font-editorial-serif text-lg md:text-xl font-medium tracking-[0.2em] text-[#F1F5EF] group-hover:text-[#39FF14] transition-colors">
              GAURAV
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14] group-hover:scale-125 transition-transform" />
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-editorial-mono tracking-[0.18em] transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#39FF14] ${
                    isActive
                      ? "text-[#F1F5EF] bg-[#39FF14]/10 border border-[#39FF14]/30 font-medium shadow-[0_0_12px_rgba(57,255,20,0.15)]"
                      : "text-[#929B91] hover:text-[#F1F5EF] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#39FF14]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Right Controls: FX Toggle & LET'S TALK CTA */}
          <div className="hidden md:flex items-center gap-3">
            {onMotionToggle && (
              <button
                onClick={onMotionToggle}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-editorial-mono tracking-wider border border-[#39FF14]/20 hover:border-[#39FF14]/50 text-[#929B91] hover:text-[#F1F5EF] transition-all bg-[#07150B]/60 hover:bg-[#0C2314] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#39FF14]"
                title={`Visual FX are currently ${motionEnabled ? "ENABLED" : "DISABLED"}`}
                aria-label={`Toggle visual effects, currently ${motionEnabled ? "ON" : "OFF"}`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    motionEnabled ? "bg-[#39FF14] shadow-[0_0_8px_#39FF14]" : "bg-gray-600"
                  }`}
                />
                <span>FX {motionEnabled ? "ON" : "OFF"}</span>
              </button>
            )}

            <button
              onClick={() => scrollTo("contact")}
              className="group relative inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#39FF14] text-[#030503] text-xs font-editorial-mono uppercase tracking-[0.16em] font-semibold transition-all duration-300 hover:bg-[#75FF36] hover:shadow-[0_0_20px_rgba(57,255,20,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF14]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Right Controls: FX Toggle & Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            {onMotionToggle && (
              <button
                onClick={onMotionToggle}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-editorial-mono text-[#929B91] border border-[#39FF14]/20 bg-[#07150B]/60"
                aria-label="Toggle motion"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    motionEnabled ? "bg-[#39FF14]" : "bg-gray-600"
                  }`}
                />
                <span>FX</span>
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#F1F5EF] hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#39FF14]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-[#030503]/98 backdrop-blur-2xl flex flex-col justify-center px-8">
          <div className="flex flex-col gap-6 max-w-sm mx-auto w-full">
            <span className="text-[11px] font-editorial-mono uppercase tracking-[0.2em] text-[#929B91] border-b border-[#39FF14]/15 pb-3">
              Navigation
            </span>
            {[
              { label: "Home", id: "hero" },
              { label: "Work", id: "work" },
              { label: "About", id: "about" },
              { label: "Skills", id: "skills" },
              { label: "Journey", id: "journey" },
              { label: "Let's Talk", id: "contact" },
            ].map((link, idx) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="flex items-center justify-between py-2 text-left group"
              >
                <span className="font-editorial-serif text-2xl tracking-wide text-[#F1F5EF] group-hover:text-[#39FF14] transition-colors">
                  {link.label}
                </span>
                <span className="text-xs font-editorial-mono text-[#929B91] group-hover:text-[#39FF14]">
                  0{idx + 1}
                </span>
              </button>
            ))}

            <div className="pt-6 border-t border-[#39FF14]/15 flex items-center justify-between text-xs font-editorial-mono text-[#929B91]">
              <span>INDIA</span>
              <span className="text-[#39FF14]">AI / DEV / BUILDER</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
