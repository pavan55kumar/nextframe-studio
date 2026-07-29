"use client";

import { useEffect, useState } from "react";

/**
 * Resolves true once web fonts are loaded AND a minimum
 * display duration has passed (so the loader doesn't just flash
 * on fast connections — always feels intentional, not glitchy).
 */
export function useAssetsReady(minDuration = 1200) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = performance.now();

    const fontsReady = document.fonts
      ? document.fonts.ready
      : Promise.resolve();

    fontsReady.then(() => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(minDuration - elapsed, 0);
      setTimeout(() => setReady(true), remaining);
    });
  }, [minDuration]);

  return ready;
}