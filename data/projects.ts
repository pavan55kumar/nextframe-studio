export interface Project {
  id: string;
  title: string;
  category: string;
  type: "photo" | "video";
  span: "small" | "medium" | "large" | "tall";
}

export const PROJECTS: Project[] = [
  { id: "01", title: "Golden Hour Editorial", category: "Photography", type: "photo", span: "large" },
  { id: "02", title: "Aether Brand Film", category: "Videography", type: "video", span: "tall" },
  { id: "03", title: "Monochrome Series", category: "Photography", type: "photo", span: "small" },
  { id: "04", title: "Studio Sessions", category: "Commercial", type: "photo", span: "medium" },
  { id: "05", title: "Coastal Campaign", category: "Brand Film", type: "video", span: "medium" },
  { id: "06", title: "Urban Textures", category: "Photography", type: "photo", span: "small" },
  { id: "07", title: "Nightlife Reel", category: "Videography", type: "video", span: "large" },
  { id: "08", title: "Product Story", category: "Commercial", type: "photo", span: "small" },
];