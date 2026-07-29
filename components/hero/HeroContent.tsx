import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="relative z-10 flex max-w-5xl flex-col items-center text-center">
      <p className="hero-badge mb-6 text-sm uppercase tracking-[0.4em] text-violet-400">
        Creative Studio
      </p>

      <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight">
        Crafting
        <br />
        <span className="gradient-text">Visual Stories</span>
      </h1>

      <p className="hero-subtitle mt-8 max-w-2xl text-lg leading-8 text-gray-400">
        Photography • Videography • Commercials • Brand Films • Creative Direction
      </p>

      <HeroButtons />
      <HeroStats />
    </div>
  );
}