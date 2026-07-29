"use client";

import ParticleLayer from "./ParticleLayer";
import { usePerformanceTier, PARTICLE_COUNT_BY_TIER } from "../../hooks/usePerformanceTier";

export default function MidParticles() {
  const tier = usePerformanceTier();
  const count = Math.floor(PARTICLE_COUNT_BY_TIER[tier] * 0.35);

  return (
    <ParticleLayer
      count={count}
      spread={[35, 20, 20]}
      zOffset={-4}
      sizeRange={[0.06, 0.12]}
      speedRange={[0.08, 0.18]}
      rotationSpeed={0.008}
      parallax={0.4}
    />
  );
}