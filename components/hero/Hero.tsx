"use client";

import BackgroundGlow from "./BackgroundGlow";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";
import ParallaxLayer from "./ParallaxLayer";

import { useHeroAnimation } from "@/animations/gsap/useHeroAnimation";

export default function Hero() {
  useHeroAnimation();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      <BackgroundGlow />

      <ParallaxLayer speed={15}>
  <HeroContent />
</ParallaxLayer>

      <ScrollIndicator />
    </section>
  );
}