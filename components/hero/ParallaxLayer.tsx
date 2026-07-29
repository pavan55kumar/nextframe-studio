"use client";

import { ReactNode } from "react";
import useMousePosition from "@/hooks/useMousePosition";

interface Props {
  children: ReactNode;
  speed?: number;
}

export default function ParallaxLayer({
  children,
  speed = 20,
}: Props) {
  const { x, y } = useMousePosition();

  return (
    <div
      style={{
        transform: `translate3d(${x * speed}px, ${y * speed}px,0)`,
        transition: "transform 0.15s ease-out",
      }}
    >
      {children}
    </div>
  );
}