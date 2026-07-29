"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import "./ParticleShaderMaterial";
import { PARTICLE_COLORS } from "./ParticleColors";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface ParticleLayerProps {
  count: number;
  spread: [number, number, number];
  zOffset?: number;
  sizeRange?: [number, number];
  speedRange?: [number, number];
  rotationSpeed?: number;
  parallax?: number; // 0 = none, higher = stronger mouse response
}

export default function ParticleLayer({
  count,
  spread,
  zOffset = 0,
  sizeRange = [0.05, 0.12],
  speedRange = [0.05, 0.2],
  rotationSpeed = 0.008,
  parallax = 0,
}: ParticleLayerProps) {
  const pointsRef = useRef<THREE.Points>(null!);
  const materialRef = useRef<any>(null!);
  const reducedMotion = useReducedMotion();

  const [positions, colors, sizes, speeds, offsets] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const speeds = new Float32Array(count);
    const offsets = new Float32Array(count);
    const palette = PARTICLE_COLORS.map((hex) => new THREE.Color(hex));

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread[0];
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread[1];
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread[2] + zOffset;

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = THREE.MathUtils.lerp(sizeRange[0], sizeRange[1], Math.random());
      speeds[i] = THREE.MathUtils.lerp(speedRange[0], speedRange[1], Math.random());
      offsets[i] = Math.random() * Math.PI * 2;
    }

    return [positions, colors, sizes, speeds, offsets];
  }, [count, spread, zOffset, sizeRange, speedRange]);

  useFrame((state) => {
    if (!pointsRef.current || !materialRef.current) return;

    materialRef.current.uniforms.uPixelRatio.value = state.gl.getPixelRatio();
    materialRef.current.uniforms.uMotion.value = reducedMotion ? 0 : 1;

    if (!reducedMotion) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      pointsRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed;

      if (parallax > 0) {
        pointsRef.current.position.x +=
          (state.mouse.x * parallax - pointsRef.current.position.x) * 0.03;
        pointsRef.current.position.y +=
          (-state.mouse.y * parallax - pointsRef.current.position.y) * 0.03;
      }
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry key={count}>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aSpeed" args={[speeds, 1]} />
        <bufferAttribute attach="attributes-aOffset" args={[offsets, 1]} />
      </bufferGeometry>

      {/* @ts-ignore - custom shader material registered via extend() */}
      <particleShaderMaterial
        ref={materialRef}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
      />
    </points>
  );
}