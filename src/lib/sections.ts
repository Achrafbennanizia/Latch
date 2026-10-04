export const SECTIONS = [
  { id: "top", label: "Rise" },
  { id: "menu", label: "Menu" },
  { id: "hours", label: "Hours" },
  { id: "location", label: "Find us" },
  { id: "catering", label: "Catering" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
