export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
      <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
       Explore Projects
      </button>

      <button className="hero-buttons rounded-full border border-white/20 bg-white/5 px-8 py-4 text-white backdrop-blur-xl transition hover:bg-white/10">
       Book a Shoot
      </button>
    </div>
  );
}