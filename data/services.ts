export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    id: "photography",
    number: "01",
    title: "Photography",
    description: "Editorial, portrait, and brand photography with cinematic color grading.",
  },
  {
    id: "videography",
    number: "02",
    title: "Videography",
    description: "Brand films, commercials, and narrative-driven video production.",
  },
  {
    id: "commercials",
    number: "03",
    title: "Commercials",
    description: "High-impact campaign films built for broadcast and digital platforms.",
  },
  {
    id: "brand-films",
    number: "04",
    title: "Brand Films",
    description: "Story-first films that capture a brand's identity and voice.",
  },
  {
    id: "creative-direction",
    number: "05",
    title: "Creative Direction",
    description: "End-to-end creative strategy from concept through final delivery.",
  },
];