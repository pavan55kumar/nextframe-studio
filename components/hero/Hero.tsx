"use client";

import Scene from "@/three/canvas/Scene";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";
import ParallaxLayer from "./ParallaxLayer";

import { useHeroAnimation } from "@/animations/gsap/useHeroAnimation";

export default function Hero() {
  useHeroAnimation();

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* Hero Content */}
     <div className="relative z-20 flex min-h-screen items-center justify-center px-6">
        <ParallaxLayer speed={15}>
          <HeroContent />
        </ParallaxLayer>
      </div>

      <ScrollIndicator />

    </section>
  );
}