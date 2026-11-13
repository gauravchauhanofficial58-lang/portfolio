"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

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

      // Scroll spy logic
      const sections = ["hero", "about", "work", "skills", "explore", "journey", "contact"];
      const scrollPos = window.scrollY + 240;

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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none transition-all duration-300">
        <nav
          className={`pointer-events-auto flex items-center justify-between transition-all duration-300 ease-out ${
            isScrolled
              ? "py-2.5 px-5 md:px-7 rounded-full bg-[#0E0E0E]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80 w-full max-w-4xl"
              : "py-3.5 px-6 md:px-8 rounded-full bg-[#111111]/50 backdrop-blur-md border border-white/8 w-full max-w-5xl"
          }`}
          aria-label="Primary navigation"
        >
          {/* Logo / Brand Name */}
          <button
            onClick={() => scrollTo("hero")}
            className="group flex items-center gap-2 text-left focus:outline-none"
            aria-label="Scroll to top"
          >
            <span className="font-editorial-serif text-lg md:text-xl font-medium tracking-[0.18em] text-[#F2EEE8] group-hover:text-[#FF8752] transition-colors">
              GAURAV
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8752] group-hover:scale-125 transition-transform" />
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {[
              { label: "Work", id: "work" },
              { label: "About", id: "about" },
              { label: "Skills", id: "skills" },
              { label: "Journey", id: "journey" },
            ].map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-editorial-mono uppercase tracking-[0.15em] transition-all duration-200 ${
                    isActive
                      ? "text-[#F2EEE8] bg-white/10"
                      : "text-[#A6A19A] hover:text-[#F2EEE8] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF8752]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Right Controls: CTA & Motion Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {onMotionToggle && (
              <button
                onClick={onMotionToggle}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-editorial-mono tracking-wider border border-white/10 hover:border-[#FF8752]/40 text-[#77736D] hover:text-[#F2EEE8] transition-colors"
                title={`Motion is currently ${motionEnabled ? "ON" : "OFF"}`}
                aria-label={`Toggle motion, currently ${motionEnabled ? "ON" : "OFF"}`}
              >
                <Sparkles className={`w-3 h-3 ${motionEnabled ? "text-[#FF8752]" : "text-gray-500"}`} />
                <span>FX {motionEnabled ? "ON" : "OFF"}</span>
              </button>
            )}

            <button
              onClick={() => scrollTo("contact")}
              className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F2EEE8] text-[#050505] text-xs font-editorial-mono uppercase tracking-[0.14em] font-medium transition-all duration-300 hover:bg-[#FF8752] hover:text-[#050505] hover:shadow-[0_0_20px_rgba(255,135,82,0.4)]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            {onMotionToggle && (
              <button
                onClick={onMotionToggle}
                className="p-1.5 rounded-full text-[#A6A19A] border border-white/10"
                aria-label="Toggle motion"
              >
                <Sparkles className={`w-3.5 h-3.5 ${motionEnabled ? "text-[#FF8752]" : "text-gray-600"}`} />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#F2EEE8] hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-center px-8">
          <div className="flex flex-col gap-6 max-w-sm mx-auto w-full">
            <span className="text-[11px] font-editorial-mono uppercase tracking-[0.2em] text-[#77736D] border-b border-white/10 pb-3">
              Navigation
            </span>
            {[
              { label: "Home", id: "hero" },
              { label: "Selected Work", id: "work" },
              { label: "About Gaurav", id: "about" },
              { label: "Skills & Stack", id: "skills" },
              { label: "Areas of Exploration", id: "explore" },
              { label: "Education & Journey", id: "journey" },
              { label: "Let's Connect", id: "contact" },
            ].map((link, idx) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="flex items-center justify-between py-2 text-left group"
              >
                <span className="font-editorial-serif text-2xl tracking-wide text-[#F2EEE8] group-hover:text-[#FF8752] transition-colors">
                  {link.label}
                </span>
                <span className="text-xs font-editorial-mono text-[#77736D] group-hover:text-[#FF8752]">
                  0{idx + 1}
                </span>
              </button>
            ))}

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-editorial-mono text-[#77736D]">
              <span>INDIA</span>
              <span className="text-[#FF8752]">AI / DEV / BUILDER</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
