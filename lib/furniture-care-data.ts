export interface ProtectionLayer {
  id: string;
  title: string;
  description: string;
}

export const protectionLayers: ProtectionLayer[] = [
  {
    id: "pot",
    title: "1. Grow pot or decorative pot",
    description:
      "Unglazed terracotta wicks moisture straight through its walls, even when the inside never floods — the clay itself stays damp against whatever it's touching.",
  },
  {
    id: "saucer",
    title: "2. A saucer sized up, not down",
    description:
      "Go 1–2\" wider than the pot's base so a generous watering doesn't sheet over the rim. Deep-lip saucers hold more runoff than the flat trays sold at most nurseries.",
  },
  {
    id: "riser",
    title: "3. Pot feet or caddy wheels",
    description:
      "A small air gap under the saucer is what actually stops condensation rings — humid days bead moisture under a flush-sitting saucer whether or not it ever overflows.",
  },
  {
    id: "pad",
    title: "4. Felt pad or cork round",
    description:
      "The last line of defense against scratches and the faint moisture that still migrates down through riser contact points.",
  },
  {
    id: "furniture",
    title: "5. Furniture surface",
    description: "Wood, veneer, or finished surface — fully isolated from pot, water, and weight transfer above.",
  },
];

export interface ProductCategory {
  id: string;
  name: string;
  lowPrice: number;
  highPrice: number;
  note: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: "pot-feet",
    name: "Pot feet / risers",
    lowPrice: 12,
    highPrice: 40,
    note: "Sets of 3–20, rubber or ceramic. Best general-purpose fix.",
  },
  {
    id: "saucers",
    name: "Deep plant saucers",
    lowPrice: 8,
    highPrice: 25,
    note: "Size up from the pot's base diameter; glazed ceramic resists staining best.",
  },
  {
    id: "cork-coasters",
    name: "Cork plant coasters",
    lowPrice: 8,
    highPrice: 20,
    note: "Simplest option — cushions and absorbs minor condensation in one layer.",
  },
  {
    id: "caddies",
    name: "Rolling plant caddies",
    lowPrice: 15,
    highPrice: 80,
    note: "Best for large/heavy pots — lifts, protects, and makes rotating for light effortless.",
  },
  {
    id: "cachepots",
    name: "Cachepots (no-drain outer pot)",
    lowPrice: 15,
    highPrice: 60,
    note: "Keep the nursery pot inside; water, drain separately, then set back in.",
  },
];

export interface LocalStore {
  id: string;
  name: string;
  address: string;
  phone?: string;
  distance: string;
  carries: string[];
  note: string;
}

export const localStores: LocalStore[] = [
  {
    id: "green-acres-eisleys",
    name: "Green Acres Nursery & Supply at Eisley's",
    address: "380 Nevada St, Old Town Auburn, CA 95603",
    phone: "(530) 885-5163",
    distance: "In town",
    carries: ["Saucers", "Cachepots", "Decorative pots", "Pottery"],
    note: "The best local stop for glazed saucers and decorative cachepots sized to match a specific pot — ask the pottery section directly.",
  },
  {
    id: "ace-hardware-auburn",
    name: "Ace Hardware Auburn",
    address: "420 Grass Valley Hwy, Auburn, CA 95603",
    phone: "(530) 889-8258",
    distance: "In town",
    carries: ["Pot feet", "Saucers", "Felt pads"],
    note: "Garden Place department carries basic risers and saucers — good for a quick in-and-out trip.",
  },
  {
    id: "home-depot-auburn",
    name: "Home Depot — Auburn",
    address: "11755 Willow Creek Drive, Auburn, CA 95603",
    distance: "In town",
    carries: ["Pot feet", "Saucers", "Rolling plant caddies"],
    note: "Widest in-stock selection of rolling caddies locally — check the Garden Center aisle, not just online.",
  },
  {
    id: "redbud-nursery",
    name: "Redbud Nursery",
    address: "3250 Rattlesnake Rd, Newcastle, CA",
    phone: "(916) 850-9117",
    distance: "~15 min",
    carries: ["Cachepots", "Decorative pottery"],
    note: "Small boutique nursery worth a call ahead for curated cachepots and pottery.",
  },
  {
    id: "online",
    name: "Online (Amazon / Etsy)",
    address: "Ships to Auburn, CA",
    distance: "2-day shipping",
    carries: ["Pot feet", "Cork coasters", "Rolling caddies", "Cachepots"],
    note: "Best for exact sizing (made-to-fit cork rounds, specific caddy weight ratings) when local stock doesn't match your pot.",
  },
];

export interface FurnitureShoppingLine {
  item: string;
  packSize: string;
  estPrice: string;
  bestSource: string;
}

export const furnitureShoppingList: FurnitureShoppingLine[] = [
  { item: "Pot feet / risers", packSize: "Set of 4 (per pot)", estPrice: "$12–$18", bestSource: "Ace Hardware or Home Depot" },
  { item: "Deep ceramic saucer", packSize: "1 per pot, sized up 1–2\"", estPrice: "$10–$25", bestSource: "Green Acres at Eisley's" },
  { item: "Felt furniture pads", packSize: "Pack of 8–20", estPrice: "$6–$10", bestSource: "Ace Hardware" },
  { item: "Cork plant coaster", packSize: "1 per pot", estPrice: "$8–$15", bestSource: "Online (Amazon/Etsy)" },
  { item: "Rolling plant caddy", packSize: "1 per large pot", estPrice: "$20–$60", bestSource: "Home Depot" },
  { item: "Cachepot (no-drain outer pot)", packSize: "1 per feature pot", estPrice: "$18–$55", bestSource: "Green Acres at Eisley's or Redbud Nursery" },
];
