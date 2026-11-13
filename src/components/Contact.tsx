"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { ArrowUpRight, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
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
        // Trigger subtle confetti celebration
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.8 },
            colors: ["#FF8752", "#F2EEE8", "#333333"],
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
      className="relative w-full py-28 md:py-36 px-4 md:px-8 border-t border-white/8 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Contact Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 text-xs font-editorial-mono uppercase tracking-[0.22em] text-[#FF8752] mb-4">
              <span className="w-6 h-[1px] bg-[#FF8752]" />
              <span>06 / GET IN TOUCH</span>
            </div>
            <h2 className="font-editorial-serif text-4xl sm:text-5xl md:text-6xl text-[#F2EEE8] font-normal tracking-[-0.02em]">
              {contact.heading}
            </h2>
          </div>
          <p className="max-w-md text-base font-editorial-serif italic text-[#A6A19A] leading-relaxed">
            &ldquo;{contact.subheading}&rdquo;
          </p>
        </div>

        {/* Contact Form and Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (5 cols): Context & Configurable Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <h3 className="font-editorial-serif text-2xl text-[#F2EEE8] font-normal">
                Let&apos;s Build Together.
              </h3>
              <p className="text-sm text-[#A6A19A] leading-relaxed">
                Whether you want to discuss emerging AI technologies, collaborate on an open-source project, or share insights on software architecture — I am always eager to connect with fellow thinkers and builders.
              </p>

              <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-white/8 space-y-3">
                <div className="flex items-center justify-between text-xs font-editorial-mono">
                  <span className="text-[#77736D]">AVAILABILITY</span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Open for Collaborative Learning
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-editorial-mono">
                  <span className="text-[#77736D]">LOCATION</span>
                  <span className="text-[#F2EEE8]">India &middot; GMT+5:30</span>
                </div>
                <div className="flex items-center justify-between text-xs font-editorial-mono">
                  <span className="text-[#77736D]">PRIMARY MEDIUM</span>
                  <span className="text-[#FF8752]">Direct Secure Portal</span>
                </div>
              </div>
            </div>

            {/* Configurable Social Channels */}
            <div>
              <span className="text-xs font-editorial-mono uppercase tracking-[0.2em] text-[#77736D] block mb-4">
                Digital Presence
              </span>
              <div className="flex flex-wrap gap-2.5">
                {contact.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#FF8752] hover:text-[#050505] text-[#A6A19A] hover:text-[#050505] text-xs font-editorial-mono uppercase tracking-wider border border-white/8 transition-all duration-300"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative p-8 sm:p-10 rounded-3xl bg-[#0D0D0D] border border-white/10">
              {status === "success" ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-editorial-serif text-3xl text-[#F2EEE8] font-normal">
                    Transmission Dispatched.
                  </h4>
                  <p className="text-sm text-[#A6A19A] max-w-md leading-relaxed">
                    Thank you for reaching out. Your note has been securely received by Gaurav.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-editorial-mono uppercase tracking-wider text-[#F2EEE8] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-editorial-mono text-red-400 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-editorial-mono uppercase tracking-wider text-[#A6A19A] flex items-center justify-between"
                    >
                      <span>Your Name</span>
                      <span className="text-[#77736D] text-[10px]">REQUIRED</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-[#FF8752] focus:outline-none text-[#F2EEE8] placeholder:text-[#555] text-sm transition-colors"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-editorial-mono uppercase tracking-wider text-[#A6A19A] flex items-center justify-between"
                    >
                      <span>Your Email</span>
                      <span className="text-[#77736D] text-[10px]">VERIFIED TRANSMISSION</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="alex@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-[#FF8752] focus:outline-none text-[#F2EEE8] placeholder:text-[#555] text-sm transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-editorial-mono uppercase tracking-wider text-[#A6A19A] flex items-center justify-between"
                    >
                      <span>Message / Inquiry</span>
                      <span className="text-[#77736D] text-[10px]">MIN 6 CHARS</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Share an interesting idea, collaborative inquiry, or exploration opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-[#FF8752] focus:outline-none text-[#F2EEE8] placeholder:text-[#555] text-sm transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#F2EEE8] hover:bg-[#FF8752] text-[#050505] text-xs font-editorial-mono uppercase tracking-[0.18em] font-semibold transition-all duration-300 disabled:opacity-50 hover:shadow-[0_0_30px_rgba(255,135,82,0.4)]"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Note...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message to Gaurav</span>
                        <Send className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
