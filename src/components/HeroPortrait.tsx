"use client";

import React from "react";
import Image from "next/image";

interface HeroPortraitProps {
  mode: "cinematic" | "color";
  mousePos: { x: number; y: number };
  motionEnabled: boolean;
  mounted: boolean;
}

/**
 * HeroPortrait — Multi-layered Dark Studio Compositing with 3D Parallax Tilt
 *
 * Implements:
 * 1. Studio Backlight: Warm atmospheric halo behind shoulders
 * 2. Progressive Dual CSS Mask: Radial vignette falloff + vertical linear attenuation
 * 3. Multi-stop Floor Melt: Seamless transition into #050505 background
 * 4. 3D Perspective Tilt: Mouse-reactive depth without sacrificing sharpness
 * 5. Facial Sharpness Preservation: Zero global blurs, 100% sharp eyes & tilak
 */
export default function HeroPortrait({
  mode,
  mousePos,
  motionEnabled,
  mounted,
}: HeroPortraitProps) {
  // Compute subtle 3D tilt angles
  const tiltX = motionEnabled ? mousePos.y * -4.5 : 0;
  const tiltY = motionEnabled ? mousePos.x * 6.0 : 0;

  return (
    <div
      className={`relative z-10 flex items-end justify-center h-[46vh] sm:h-[52vh] md:h-[58vh] lg:h-[64vh] max-h-[680px] w-auto aspect-[3/4] transition-all duration-1000 ease-out will-change-transform ${
        mounted
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 translate-y-6"
      }`}
      style={{
        perspective: "1000px",
        transform: motionEnabled
          ? `translate3d(${mousePos.x * 8}px, ${mousePos.y * 6}px, 0)`
          : "none",
      }}
    >
      {/* 1. Studio Backlight: Soft emerald & neon ambient glow behind subject's shoulders */}
      <div
        className="pointer-events-none absolute inset-x-2 sm:inset-x-6 bottom-4 top-14 -z-10 rounded-full blur-[75px] opacity-30 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 50%, rgba(57, 255, 20, 0.22) 0%, rgba(9, 35, 19, 0.45) 55%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* 2. Atmospheric Dark Vignette Behind Subject for Studio Depth */}
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-full blur-[85px] opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, transparent 35%, rgba(3, 5, 3, 0.88) 75%)",
        }}
        aria-hidden="true"
      />

      {/* 3. Masked Image Container with Progressive Dual CSS Masking & 3D Perspective */}
      <div
        className="relative w-full h-full flex items-end justify-center overflow-visible transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          transformStyle: "preserve-3d",
          // Multi-directional progressive alpha mask:
          // Radial mask feathers shoulder sides; linear mask dissolves bottom edge
          maskImage:
            "radial-gradient(ellipse 95% 88% at 50% 36%, black 58%, rgba(0,0,0,0.85) 76%, transparent 100%), linear-gradient(to bottom, black 65%, rgba(0,0,0,0.6) 82%, transparent 98%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 95% 88% at 50% 36%, black 58%, rgba(0,0,0,0.85) 76%, transparent 100%), linear-gradient(to bottom, black 65%, rgba(0,0,0,0.6) 82%, transparent 98%)",
        }}
      >
        <Image
          src={
            mode === "cinematic"
              ? "/images/portrait_cinematic.webp"
              : "/images/portrait_color.webp"
          }
          alt="Authentic Portrait of Gaurav"
          width={1086}
          height={1448}
          priority
          quality={95}
          className="w-full h-full object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.98)] transition-all duration-500 select-none pointer-events-none"
        />
      </div>

      {/* 4. Multi-Stop Floor Melt Gradient Overlay */}
      <div
        className="absolute -bottom-1 inset-x-0 h-24 sm:h-28 md:h-32 pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(to top, #030503 15%, rgba(3, 5, 3, 0.92) 45%, rgba(3, 5, 3, 0.45) 75%, transparent 100%)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
