"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function TestSphere() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x += 0.005;

    mesh.current.position.y =
      Math.sin(state.clock.elapsedTime) * 0.25;
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.4, 2]} />

      <meshStandardMaterial
        color="#8b5cf6"
        metalness={1}
        roughness={0.15}
      />
    </mesh>
  );
}