"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Contact() {
  const { contact } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.8 },
            colors: ["#39FF14", "#75FF36", "#092313", "#F1F5EF"],
          });
        } catch {}
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Unable to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please check your connection.");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 md:py-36 px-4 md:px-8 border-t border-[#39FF14]/15 bg-[#030503]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Contact Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 text-xs font-editorial-mono uppercase tracking-[0.22em] text-[#39FF14] mb-4">
              <span className="w-6 h-[1px] bg-[#39FF14]" />
              <span>06 / GET IN TOUCH</span>
            </div>
            <h2 className="font-editorial-serif text-4xl sm:text-5xl md:text-6xl text-[#F1F5EF] font-normal tracking-[-0.02em]">
              {contact.heading}
            </h2>
          </div>
          <p className="max-w-md text-base font-editorial-serif italic text-[#929B91] leading-relaxed">
            &ldquo;{contact.subheading}&rdquo;
          </p>
        </div>

        {/* Contact Form and Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (5 cols): Context & Configurable Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <h3 className="font-editorial-serif text-2xl text-[#F1F5EF] font-normal">
                Let&apos;s Build Together.
              </h3>
              <p className="text-sm text-[#929B91] leading-relaxed">
                Whether you want to discuss emerging AI technologies, collaborate on an open-source project, or share insights on software architecture — I am always eager to connect with fellow thinkers and builders.
              </p>

              <div className="p-5 rounded-2xl bg-[#07150B] border border-[#39FF14]/15 space-y-3 shadow-lg">
                <div className="flex items-center justify-between text-xs font-editorial-mono">
                  <span className="text-[#5D665C]">AVAILABILITY</span>
                  <span className="text-[#39FF14] flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse shadow-[0_0_8px_#39FF14]" />
                    Open for Collaborative Learning
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-editorial-mono">
                  <span className="text-[#5D665C]">LOCATION</span>
                  <span className="text-[#F1F5EF]">India &middot; GMT+5:30</span>
                </div>
                <div className="flex items-center justify-between text-xs font-editorial-mono">
                  <span className="text-[#5D665C]">PRIMARY MEDIUM</span>
                  <span className="text-[#39FF14]">Direct Secure Portal</span>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-editorial-mono uppercase tracking-wider text-[#5D665C] block mb-3">
                  Verified Channels
                </span>
                <div className="flex flex-col gap-2">
                  {contact.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between p-3.5 rounded-xl bg-[#07150B] hover:bg-[#0C2314] border border-[#39FF14]/15 hover:border-[#39FF14]/50 transition-all duration-300"
                    >
                      <span className="text-xs font-editorial-mono uppercase tracking-wider text-[#F1F5EF] group-hover:text-[#39FF14] transition-colors">
                        {social.label}
                      </span>
                      <span className="text-xs font-editorial-mono text-[#5D665C] group-hover:text-[#39FF14]">
                        CONNECT &rarr;
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Functional Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#07150B] border border-[#39FF14]/20 shadow-2xl shadow-black">
            <h3 className="font-editorial-serif text-2xl text-[#F1F5EF] font-normal mb-2">
              Send a Direct Transmission
            </h3>
            <p className="text-xs font-editorial-mono text-[#5D665C] uppercase tracking-wider mb-8">
              All messages received securely via API
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-editorial-mono uppercase tracking-wider text-[#929B91] mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ada Lovelace"
                  className="w-full px-4 py-3 rounded-xl bg-[#050805] border border-[#39FF14]/20 focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] text-[#F1F5EF] placeholder-[#5D665C] text-sm font-sans outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-editorial-mono uppercase tracking-wider text-[#929B91] mb-2"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ada@computing.org"
                  className="w-full px-4 py-3 rounded-xl bg-[#050805] border border-[#39FF14]/20 focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] text-[#F1F5EF] placeholder-[#5D665C] text-sm font-sans outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-editorial-mono uppercase tracking-wider text-[#929B91] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share a thought, an interesting technology, or a question..."
                  className="w-full px-4 py-3 rounded-xl bg-[#050805] border border-[#39FF14]/20 focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] text-[#F1F5EF] placeholder-[#5D665C] text-sm font-sans outline-none transition-all resize-none"
                />
              </div>

              {/* Status Feedbacks */}
              {status === "success" && (
                <div className="p-4 rounded-xl bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center gap-3 text-xs font-editorial-mono text-[#39FF14]">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Message delivered successfully. Thank you for connecting!</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-xs font-editorial-mono text-red-400">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#39FF14] hover:bg-[#75FF36] text-[#030503] text-xs font-editorial-mono uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.45)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] disabled:opacity-50 cursor-pointer"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
