"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor({ enabled = true }: { enabled?: boolean }) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [target, setTarget] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device (mobile / tablet coarse pointer)
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setTarget({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const targetEl = e.target as HTMLElement | null;
      if (
        targetEl &&
        (targetEl.tagName === "BUTTON" ||
          targetEl.tagName === "A" ||
          targetEl.closest("button") ||
          targetEl.closest("a") ||
          targetEl.classList.contains("interactive-hover"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  // Smooth lerp loop
  useEffect(() => {
    if (isTouchDevice || !enabled) return;

    let animId: number;
    const lerp = () => {
      setPosition((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.22,
        y: prev.y + (target.y - prev.y) * 0.22,
      }));
      animId = requestAnimationFrame(lerp);
    };
    animId = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(animId);
  }, [target, isTouchDevice, enabled]);

  if (isTouchDevice || !enabled || !isVisible) return null;

  return (
    <>
      {/* Outer Neon Trailing Ring */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full transition-transform duration-150 ease-out will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
            isClicking ? 0.75 : isHovered ? 1.75 : 1
          })`,
          width: "36px",
          height: "36px",
          border: isHovered
            ? "1.5px solid rgba(57, 255, 20, 0.85)"
            : "1px solid rgba(57, 255, 20, 0.3)",
          backgroundColor: isHovered ? "rgba(57, 255, 20, 0.08)" : "transparent",
          boxShadow: isHovered ? "0 0 15px rgba(57, 255, 20, 0.35)" : "none",
        }}
      />
      {/* Center Electric Neon Green Dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-[#39FF14] transition-transform duration-75 will-change-transform shadow-[0_0_8px_#39FF14]"
        style={{
          transform: `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%) scale(${
            isHovered ? 0 : 1
          })`,
          width: "6px",
          height: "6px",
        }}
      />
    </>
  );
}
