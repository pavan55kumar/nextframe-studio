"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PerformanceMonitor } from "@react-three/drei";
import BloomEffects from "../effects/BloomEffects";
import CameraRig from "./CameraRig";
import Lights from "../lights/Lights";
import ParticleField from "../particles/ParticleField";
import MidParticles from "../particles/MidParticles";
import ForegroundParticles from "../particles/ForegroundParticles";
import { usePerformanceTier, DPR_BY_TIER } from "../../hooks/usePerformanceTier";

export default function Scene() {
  const tier = usePerformanceTier();

  return (
    <Canvas
      dpr={DPR_BY_TIER[tier]}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <color attach="background" args={["black"]} />

      {process.env.NODE_ENV === "development" && (
        <PerformanceMonitor onDecline={() => console.warn("[perf] FPS declining")} />
      )}

      <Suspense fallback={null}>
        <CameraRig />
        <Lights />
        <ParticleField />
        <MidParticles />
        <ForegroundParticles />
      </Suspense>
      <BloomEffects />
    </Canvas>
  );
}