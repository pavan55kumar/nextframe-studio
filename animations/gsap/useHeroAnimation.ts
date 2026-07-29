"use client";

import { useEffect } from "react";
import gsap from "gsap";

export function useHeroAnimation() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".hero-badge", {
      opacity: 0,
      y: 30,
      duration: 0.6,
    })
      .from(
        ".hero-title",
        {
          opacity: 0,
          y: 60,
          duration: 1,
        },
        "-=0.3"
      )
      .from(
        ".hero-subtitle",
        {
          opacity: 0,
          y: 40,
          duration: 0.7,
        },
        "-=0.5"
      )
      .from(
        ".hero-buttons",
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
        },
        "-=0.4"
      )
      .from(
        ".hero-stats",
        {
          opacity: 0,
          y: 20,
          stagger: 0.15,
          duration: 0.5,
        },
        "-=0.4"
      )
      .from(
        ".scroll-indicator",
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
        },
        "-=0.2"
      );
  }, []);
}