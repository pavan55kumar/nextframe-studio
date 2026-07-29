"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ScrollCameraTarget {
  x: number;
  y: number;
  z: number;
}

/**
 * Returns a mutable ref that GSAP updates on scroll.
 * CameraRig reads from this ref every frame and lerps toward it,
 * so scroll-driven movement and mouse parallax blend smoothly
 * instead of fighting each other.
 */
export function useScrollCamera() {
  const target = useRef<ScrollCameraTarget>({ x: 0, y: 0, z: 5 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      })
        .to(target.current, { z: 8, y: 1.2, ease: "none" }, 0)
        .to(target.current, { x: -1.5, z: 6, y: -0.5, ease: "none" }, 0.5)
        .to(target.current, { x: 0, z: 4.5, y: 0.3, ease: "none" }, 1);
    });

    return () => ctx.revert();
  }, []);

  return target;
}