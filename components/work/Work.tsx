import Section from "@/components/layout/Section";
import WorkGrid from "./WorkGrid";

export default function Work() {
  return (
    <Section id="work">
      <div className="mx-auto max-w-7xl px-6">
        <p className="reveal text-sm uppercase tracking-[0.4em] text-violet-400">
          Selected Work
        </p>
        <h2 className="reveal mt-4 max-w-2xl text-4xl font-black leading-tight md:text-6xl">
          Stories Worth Telling
        </h2>

        <div className="mt-16">
          <WorkGrid />
        </div>
      </div>
    </Section>
  );
}