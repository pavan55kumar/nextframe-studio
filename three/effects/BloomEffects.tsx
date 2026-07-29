"use client";

import {
  EffectComposer,
  Bloom,
  Vignette,
  Noise,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function BloomEffects() {
  const caRef = useRef<any>(null);

  useFrame((state) => {
    if (!caRef.current) return;
    // very subtle animated drift so it doesn't look static/flat
    const t = state.clock.elapsedTime;
    caRef.current.offset = new THREE.Vector2(
      Math.sin(t * 0.05) * 0.0006,
      Math.cos(t * 0.05) * 0.0006
    );
  });

  return (
    <EffectComposer>
      <Bloom
        intensity={0.6}
        luminanceThreshold={0.25}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
      <ChromaticAberration
        ref={caRef}
        blendFunction={BlendFunction.NORMAL}
        offset={new THREE.Vector2(0.0006, 0.0006)}
      />
      <Noise
        blendFunction={BlendFunction.OVERLAY}
        opacity={0.025}
      />
      <Vignette eskil={false} offset={0.15} darkness={0.9} />
    </EffectComposer>
  );
}