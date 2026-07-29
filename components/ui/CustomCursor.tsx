"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip entirely on touch devices — no cursor to replace
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const ringPos = { x: 0, y: 0 };

 const handleMouseMove = (e: MouseEvent) => {
  const hidden = document.body.classList.contains("cursor-hidden-zone");
  gsap.to(dot, { opacity: hidden ? 0 : 1, duration: 0.2 });
  gsap.to(ring, { opacity: hidden ? 0 : 1, duration: 0.2 });

  gsap.set(dot, { x: e.clientX, y: e.clientY });
  gsap.to(ringPos, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.5,
    ease: "power3.out",
    onUpdate: () => gsap.set(ring, { x: ringPos.x, y: ringPos.y }),
  });
};

    const handleMouseEnterInteractive = () => {
      gsap.to(ring, { scale: 1.8, duration: 0.3 });
    };
    const handleMouseLeaveInteractive = () => {
      gsap.to(ring, { scale: 1, duration: 0.3 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const interactiveEls = document.querySelectorAll("button, a");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterInteractive);
      el.addEventListener("mouseleave", handleMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterInteractive);
        el.removeEventListener("mouseleave", handleMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white hidden md:block"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 hidden md:block"
      />
    </>
  );
}