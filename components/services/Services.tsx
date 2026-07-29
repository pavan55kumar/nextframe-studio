"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Section from "@/components/layout/Section";
import ServiceRow from "./ServiceRow";
import { SERVICES } from "@/data/services";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const quickX = useRef<gsap.QuickToFunc | null>(null);
  const quickY = useRef<gsap.QuickToFunc | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    if (!quickX.current || !quickY.current) {
      quickX.current = gsap.quickTo(thumbRef.current, "x", { duration: 0.5, ease: "power3.out" });
      quickY.current = gsap.quickTo(thumbRef.current, "y", { duration: 0.5, ease: "power3.out" });
    }

    const rect = containerRef.current.getBoundingClientRect();
    quickX.current(e.clientX - rect.left);
    quickY.current(e.clientY - rect.top);
  };

  useEffect(() => {
    document.body.classList.toggle("cursor-hidden-zone", !!activeId);
    return () => document.body.classList.remove("cursor-hidden-zone");
  }, [activeId]);

  return (
    <Section id="services">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative mx-auto max-w-7xl px-6"
      >
        <p className="reveal text-sm uppercase tracking-[0.4em] text-violet-400">
          What We Do
        </p>
        <h2 className="reveal mt-4 text-4xl font-black leading-tight md:text-6xl">
          Services
        </h2>

        <div className="mt-16">
          {SERVICES.map((service) => (
            <ServiceRow
              key={service.id}
              service={service}
              onHoverStart={() => setActiveId(service.id)}
              onHoverEnd={() => setActiveId(null)}
            />
          ))}
        </div>

        {/* Floating cursor-follow thumbnail — placeholder gradient until real media exists */}
        <div
          ref={thumbRef}
          className={`pointer-events-none absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 h-40 w-56 rounded-[var(--radius-md)] bg-gradient-to-br from-violet-600/40 via-indigo-600/30 to-transparent backdrop-blur-sm transition-opacity duration-300 hidden md:block ${
            activeId ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </Section>
  );
}