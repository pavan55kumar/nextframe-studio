"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useAssetsReady } from "@/hooks/useAssetsReady";

export default function Loader() {
  const ready = useAssetsReady();
  const [mounted, setMounted] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!counterRef.current) return;

    const counter = { value: 0 };
    gsap.to(counter, {
      value: 100,
      duration: 1.4,
      ease: "power2.out",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = `${Math.floor(counter.value)}%`;
        }
      },
    });
  }, []);

  useEffect(() => {
    if (!ready || !overlayRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(overlayRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
        delay: 0.3,
        onComplete: () => setMounted(false),
      });
    });

    return () => ctx.revert();
  }, [ready]);

  if (!mounted) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black"
    >
      <p className="text-sm uppercase tracking-[0.4em] text-violet-400">
        NextFrame Studio
      </p>
      <div
        ref={counterRef}
        className="mt-4 text-6xl font-black tabular-nums text-white"
      >
        0%
      </div>
    </div>
  );
}