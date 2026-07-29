"use client";

import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { particleVertexShader } from "../shaders/particleVertex";
import { particleFragmentShader } from "../shaders/particleFragment";

const ParticleShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uPixelRatio: 1,
    uMotion: 1,
  },
  particleVertexShader,
  particleFragmentShader
);

extend({ ParticleShaderMaterial });

export default ParticleShaderMaterial;