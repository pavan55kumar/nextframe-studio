import { PROJECTS } from "@/data/projects";
import WorkCard from "./WorkCard";

export default function WorkGrid() {
  return (
    <div className="grid grid-cols-2 gap-6 [grid-auto-rows:180px] md:grid-cols-4 md:gap-8 md:[grid-auto-rows:220px]">
      {PROJECTS.map((project) => (
        <WorkCard key={project.id} project={project} />
      ))}
    </div>
  );
}