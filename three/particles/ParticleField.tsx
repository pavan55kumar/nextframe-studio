"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null!);

  const particleCount = 3000;

  const positions = useMemo(() => {
    const array = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      array[i * 3] = (Math.random() - 0.5) * 30;
      array[i * 3 + 1] = (Math.random() - 0.5) * 20;
      array[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    return array;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    pointsRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#8b5cf6"
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}