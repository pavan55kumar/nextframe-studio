"use client";

import { useEffect, useState } from "react";

export type PerformanceTier = "low" | "medium" | "high";

/**
 * Rough device-capability heuristic. Not scientific — just enough
 * to avoid handing 8000 particles + bloom to a low-end mobile GPU.
 */
export function usePerformanceTier(): PerformanceTier {
  const [tier, setTier] = useState<PerformanceTier>("high");

  useEffect(() => {
    const cores = navigator.hardwareConcurrency ?? 4;
    const memory = (navigator as any).deviceMemory ?? 4; // Chrome-only, undefined elsewhere
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile && (cores <= 4 || memory <= 4)) {
      setTier("low");
    } else if (isMobile || cores <= 4 || memory <= 4) {
      setTier("medium");
    } else {
      setTier("high");
    }
  }, []);

  return tier;
}

export const PARTICLE_COUNT_BY_TIER: Record<PerformanceTier, number> = {
  low: 2000,
  medium: 4500,
  high: 8000,
};

export const DPR_BY_TIER: Record<PerformanceTier, [number, number]> = {
  low: [1, 1],
  medium: [1, 1.5],
  high: [1, 2],
};