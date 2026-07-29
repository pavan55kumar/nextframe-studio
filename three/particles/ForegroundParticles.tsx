"use client";

import ParticleLayer from "./ParticleLayer";
import { usePerformanceTier, PARTICLE_COUNT_BY_TIER } from "../../hooks/usePerformanceTier";

export default function ForegroundParticles() {
  const tier = usePerformanceTier();
  const count = Math.floor(PARTICLE_COUNT_BY_TIER[tier] * 0.12);

  return (
    <ParticleLayer
      count={count}
      spread={[20, 12, 8]}
      zOffset={2}
      sizeRange={[0.1, 0.22]}
      speedRange={[0.15, 0.3]}
      rotationSpeed={0.015}
      parallax={1.2}
    />
  );
}