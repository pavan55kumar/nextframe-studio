"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import CameraRig from "./CameraRig";
import Lights from "../lights/Lights";
import TestSphere from "../scenes/TestSphere";

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 50,
      }}
    >
      <color attach="background" args={["black"]} />

      <Suspense fallback={null}>
        <CameraRig />
        <Lights />
        <TestSphere />
      </Suspense>
    </Canvas>
  );
}