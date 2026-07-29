"use client";

import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      setPosition({ x, y });
    };

    window.addEventListener("mousemove", updateMouse);

    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return position;
}