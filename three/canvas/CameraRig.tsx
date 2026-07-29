"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useScrollCamera } from "../../hooks/useScrollCamera";

export default function CameraRig() {
  const { camera, mouse } = useThree();
  const scrollTarget = useScrollCamera();

  useFrame(() => {
    const target = scrollTarget.current;

    const mouseInfluenceX = mouse.x * 0.8;
    const mouseInfluenceY = -mouse.y * 0.8;

    camera.position.x += (target.x + mouseInfluenceX - camera.position.x) * 0.03;
    camera.position.y += (target.y + mouseInfluenceY - camera.position.y) * 0.03;
    camera.position.z += (target.z - camera.position.z) * 0.03;

    camera.lookAt(0, 0, 0);
  });

  return null;
}