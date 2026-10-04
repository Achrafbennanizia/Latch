export const CONTENT = {
  brand: "LATCH",
  kind: "Café & Bakery",
  neighborhood: "Cedar Ward",
  address: "14 Cedar Lane",
  city: "Harbor District",
  phone: "(415) 555-0142",
  email: "hello@latchbakery.studio",
  heroLine: "Bread before the rush.",
  heroBody:
    "Neighborhood oven and morning counter — loaves, pastry, and coffee for the block.",
  heroCta: "See today’s menu",
  heroSecondary: "Request catering",
  menuEyebrow: "From the case",
  menuTitle: "What we bake and pour",
  menuLead: "Rotated daily. Ask the counter for what’s left of the morning bake.",
  hoursEyebrow: "Open hours",
  hoursTitle: "When the latch turns",
  locationEyebrow: "Find us",
  locationTitle: "Corner of Cedar & Vine",
  locationBody:
    "Look for the butter-window glow and the metal LATCH letters above the door. Bike racks on Vine. Two street spots after 10am.",
  cateringEyebrow: "Catering",
  cateringTitle: "Feed the room, not the inbox.",
  cateringBody:
    "Office breakfasts, weekend tables, and small gatherings — 48 hours notice preferred. Tell us the headcount and we’ll reply with a tray list.",
  cateringCta: "Send catering request",
} as const;

export const MENU = {
  bakery: [
    { name: "Country loaf", note: "Naturally leavened", price: "$8" },
    { name: "Seeded baguette", note: "Morning bake", price: "$5" },
    { name: "Butter croissant", note: "72-hour laminate", price: "$4.50" },
    { name: "Cinnamon morning bun", note: "Walnut sugar", price: "$4.75" },
    { name: "Berry danish", note: "Seasonal fruit", price: "$5.25" },
    { name: "Olive focaccia", note: "Square cut", price: "$6" },
  ],
  cafe: [
    { name: "House espresso", note: "Single origin rotate", price: "$3.50" },
    { name: "Latte / cappuccino", note: "Oat available", price: "$4.75" },
    { name: "Filter coffee", note: "Batch or pour-over", price: "$3.75" },
    { name: "Cedar chai", note: "House spice", price: "$4.50" },
    { name: "Morning sandwich", note: "Egg, cheddar, soft roll", price: "$9" },
    { name: "Soup of the day", note: "With hearth bread", price: "$8" },
  ],
} as const;

export const HOURS = [
  { day: "Monday", time: "7:00 – 3:00" },
  { day: "Tuesday", time: "7:00 – 3:00" },
  { day: "Wednesday", time: "7:00 – 3:00" },
  { day: "Thursday", time: "7:00 – 3:00" },
  { day: "Friday", time: "7:00 – 4:00" },
  { day: "Saturday", time: "8:00 – 4:00" },
  { day: "Sunday", time: "8:00 – 2:00" },
] as const;

export const PHOTOS = {
  hero: {
    src: "/photos/latch-hero-storefront.jpg",
    alt: "LATCH café and bakery storefront at morning light",
  },
  pastry: {
    src: "/photos/latch-pastry-case.jpg",
    alt: "Pastry case with croissants and morning buns",
  },
  bread: {
    src: "/photos/latch-bread-shelf.jpg",
    alt: "Wooden bread racks with country loaves and baguettes",
  },
  coffee: {
    src: "/photos/latch-coffee-bar.jpg",
    alt: "Café counter with espresso machine and ceramic cups",
  },
} as const;
