"use client";

import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, className = "", children }: SectionProps) {
  const ref = useScrollReveal();

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}