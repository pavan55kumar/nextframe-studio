"use client";

import useMousePosition from "@/hooks/useMousePosition";

export default function BackgroundGlow() {
  const { x, y } = useMousePosition();

  return (
    <>
      <div
        className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[180px]"
        style={{
          transform: `translate(${x * 40}px, ${y * 40}px)`,
          transition: "transform .2s ease-out",
        }}
      />

      <div
        className="absolute right-20 top-20 h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-[120px]"
        style={{
          transform: `translate(${x * 20}px, ${y * 20}px)`,
          transition: "transform .25s ease-out",
        }}
      />
    </>
  );
}