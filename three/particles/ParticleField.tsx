"use client";

import ParticleLayer from "./ParticleLayer";
import { usePerformanceTier, PARTICLE_COUNT_BY_TIER } from "../../hooks/usePerformanceTier";

export default function ParticleField() {
  const tier = usePerformanceTier();
  const count = PARTICLE_COUNT_BY_TIER[tier];

  return (
    <ParticleLayer
      count={count}
      spread={[60, 35, 50]}
      zOffset={-15}
      sizeRange={[0.03, 0.07]}
      speedRange={[0.02, 0.08]}
      rotationSpeed={0.004}
      parallax={0}
    />
  );
}