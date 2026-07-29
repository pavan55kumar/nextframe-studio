"use client";

import { Project } from "@/data/projects";

const SPAN_CLASSES: Record<Project["span"], string> = {
  small: "row-span-1",
  medium: "row-span-2",
  large: "row-span-2 md:col-span-2",
  tall: "row-span-3",
};

export default function WorkCard({ project }: { project: Project }) {
  return (
    <div
      className={`reveal group relative overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-gradient-to-br from-surface to-surface-light ${SPAN_CLASSES[project.span]}`}
    >
      {/* Placeholder media — replace with next/image or video once real assets exist */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-indigo-600/10 to-transparent transition-transform duration-700 group-hover:scale-110" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-black/40">
        <p className="text-xs uppercase tracking-[0.3em] text-violet-400">
          {project.category}
        </p>
        <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
          {project.title}
        </h3>
      </div>

      <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs uppercase tracking-wide text-gray-300 backdrop-blur-md">
        {project.type}
      </div>
    </div>
  );
}