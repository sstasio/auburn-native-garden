export interface Plant {
  slug: string;
  common: string;
  botanical: string;
  category: "Fence Line" | "Container";
  potPairing?: string;
  size: string;
  water: "Very Low" | "Low" | "Low-Moderate" | "Moderate";
  sun: "Full Sun" | "Full Sun / Part Shade";
  bloom: string;
  bloomColor: string;
  notes: string;
}

export const plants: Plant[] = [
  {
    slug: "ray-hartman",
    common: "Wild Lilac 'Ray Hartman'",
    botanical: "Ceanothus 'Ray Hartman'",
    category: "Fence Line",
    size: "12–20 ft tall/wide",
    water: "Low",
    sun: "Full Sun",
    bloom: "Spring",
    bloomColor: "#4C6FA5",
    notes:
      "Anchor shrub at the tall end of the fence run. Can be trained single-stem as a small tree or left multi-trunk for denser screening. 3–4 ft clearance from fence, ~8 ft from 'Dark Star'.",
  },
  {
    slug: "dark-star",
    common: "Wild Lilac 'Dark Star'",
    botanical: "Ceanothus 'Dark Star'",
    category: "Fence Line",
    size: "6–10 ft tall/wide",
    water: "Low",
    sun: "Full Sun",
    bloom: "Spring",
    bloomColor: "#2E3A6B",
    notes:
      "Denser, darkest blue bloom of the popular cultivars. Fills gaps between taller Ray Hartman specimens. 6–8 ft from Ray Hartman, 3–4 ft from fence.",
  },
  {
    slug: "pozo-blue",
    common: "Sage 'Pozo Blue'",
    botanical: "Salvia clevelandii x leucophylla 'Pozo Blue'",
    category: "Fence Line",
    size: "4–6 ft tall/wide",
    water: "Low-Moderate",
    sun: "Full Sun",
    bloom: "Late spring",
    bloomColor: "#8C7BB5",
    notes:
      "Slightly more water-tolerant than Ceanothus — place at the transition edge on its own zone. ~5 ft from Dark Star, 2–3 ft from fence.",
  },
  {
    slug: "verbena",
    common: "Verbena 'De La Mina'",
    botanical: "Verbena lilacina 'De La Mina'",
    category: "Container",
    potPairing: "Combo Pot 1 — with Scarlet Coyote Mint",
    size: "2–3 ft mounding",
    water: "Low",
    sun: "Full Sun",
    bloom: "Near year-round",
    bloomColor: "#7B5FA6",
    notes: "Anchor of Combo Pot 1. Tidy, reliable mounding habit, purple bloom nearly all year.",
  },
  {
    slug: "coyote-mint",
    common: "Scarlet Coyote Mint",
    botanical: "Monardella macrantha",
    category: "Container",
    potPairing: "Combo Pot 1 — with Verbena 'De La Mina'",
    size: "6–12 in trailing mat",
    water: "Low",
    sun: "Full Sun",
    bloom: "Summer",
    bloomColor: "#D0492B",
    notes: "Trailing edge plant, cascades over the rim. Red-orange bloom is a hummingbird favorite.",
  },
  {
    slug: "monkeyflower",
    common: "Monkeyflower 'Changeling'",
    botanical: "Diplacus 'Changeling'",
    category: "Container",
    potPairing: "Combo Pot 2 — with Penstemon & Idaho Fescue",
    size: "1–2 ft shrub",
    water: "Low",
    sun: "Full Sun / Part Shade",
    bloom: "Spring–summer",
    bloomColor: "#E8A33D",
    notes: "Bicolor cream-orange bloom anchors Combo Pot 2.",
  },
  {
    slug: "penstemon",
    common: "Penstemon 'Catherine de la Mare'",
    botanical: "Penstemon heterophyllus 'Catherine de la Mare'",
    category: "Container",
    potPairing: "Combo Pot 2 — with Monkeyflower & Idaho Fescue",
    size: "1–2 ft mounding",
    water: "Low-Moderate",
    sun: "Full Sun",
    bloom: "Late spring",
    bloomColor: "#5C7CBF",
    notes: "Easygoing mixer, blue-lavender spikes complement the monkeyflower.",
  },
  {
    slug: "yarrow",
    common: "Island Pink Yarrow (established)",
    botanical: "Achillea millefolium 'Island Pink'",
    category: "Container",
    potPairing: "Combo Pot 3 — with Idaho Fescue",
    size: "1–2 ft, ferny foliage",
    water: "Low-Moderate",
    sun: "Full Sun",
    bloom: "Spring–summer",
    bloomColor: "#E8A9C0",
    notes:
      "Already established in its 16\" pot. Add fescue at the edge, not center, to avoid crowding roots — best done in fall or early spring.",
  },
  {
    slug: "milkweed",
    common: "Narrowleaf Milkweed",
    botanical: "Asclepias fascicularis",
    category: "Container",
    potPairing: "Combo Pot 4 — with Idaho Fescue",
    size: "2–3 ft, dies back in winter",
    water: "Low-Moderate",
    sun: "Full Sun",
    bloom: "Summer",
    bloomColor: "#EDEDED",
    notes:
      "Monarch host plant. Dies back completely in winter — fescue companion holds visual structure. No pesticides in this pot, ever.",
  },
  {
    slug: "fescue",
    common: "Idaho Fescue",
    botanical: "Festuca idahoensis",
    category: "Container",
    potPairing: "Companion in 3 combo pots (Combo 2, Yarrow, Milkweed)",
    size: "1–2 ft bunchgrass",
    water: "Low",
    sun: "Full Sun / Part Shade",
    bloom: "Airy seed heads",
    bloomColor: "#8FA39B",
    notes: "Evergreen structure, non-aggressive — the connective tissue plant of this whole plan. You'll need three total.",
  },
  {
    slug: "trichostema",
    common: "Woolly Blue Curls 'Midnight Blue'",
    botanical: "Trichostema lanatum 'Midnight Blue'",
    category: "Container",
    potPairing: "Solo — 18–20\" pot",
    size: "3–4 ft shrub",
    water: "Very Low",
    sun: "Full Sun",
    bloom: "Late spring–summer",
    bloomColor: "#2B3A6B",
    notes: "Root-sensitive diva. Needs undisturbed, fast-draining roots — never pair it with anything.",
  },
  {
    slug: "fuchsia",
    common: "California Fuchsia",
    botanical: "Epilobium canum",
    category: "Container",
    potPairing: "Solo — 16\" pot",
    size: "1–2 ft, spreading",
    water: "Low",
    sun: "Full Sun",
    bloom: "Late summer–fall",
    bloomColor: "#D9542F",
    notes: "Spreads by runners — solo prevents it from swallowing a neighbor within 2–3 seasons.",
  },
  {
    slug: "caramel-creeper",
    common: "Wild Lilac 'Caramel Creeper'",
    botanical: "Ceanothus (groundcover form)",
    category: "Container",
    potPairing: "Solo — 16–18\" wide, shallow pot",
    size: "1–2 ft x 4–6 ft spread",
    water: "Low",
    sun: "Full Sun",
    bloom: "Spring",
    bloomColor: "#4C6FA5",
    notes: "Ceanothus family wants to stay dry — keep it away from moderate-water companions.",
  },
];

export const fencePlants = plants.filter((p) => p.category === "Fence Line");
export const containerPlants = plants.filter((p) => p.category === "Container");

export interface Ingredient {
  common: string;
  botanical: string;
  qty: number;
  nurserySize: string;
  role: string;
}

export interface Pot {
  id: string;
  title: string;
  image: string;
  potSize: string;
  soilMix: string;
  waterNote: string;
  ingredients: Ingredient[];
  plants: string[];
  description: string;
}

const rawPots: Omit<Pot, "plants">[] = [
  {
    id: "combo-1",
    title: "Combo Pot 1 — Verbena & Scarlet Coyote Mint",
    image: "/images/pot-verbena-coyotemint.webp",
    potSize: "16\" round",
    soilMix: "Standard potting soil + 25% pumice/perlite. Moderate drainage — this pair tolerates the baseline mix without extra grit.",
    waterNote: "Every 5–9 days once established; both plants share the same low-water rhythm, no split schedule needed.",
    ingredients: [
      { common: "Verbena 'De La Mina'", botanical: "Verbena lilacina 'De La Mina'", qty: 1, nurserySize: "1-gal", role: "Anchor, center-back" },
      { common: "Scarlet Coyote Mint", botanical: "Monardella macrantha", qty: 2, nurserySize: "4\" pot", role: "Trailing, front edge" },
    ],
    description:
      "Both low-water, full-sun, similar vigor. Verbena blooms nearly year-round in purple; coyote mint trails over the rim with red-orange summer bloom.",
  },
  {
    id: "combo-2",
    title: "Combo Pot 2 — Monkeyflower, Penstemon & Idaho Fescue",
    image: "/images/pot-monkeyflower-penstemon-fescue.webp",
    potSize: "16\" round",
    soilMix: "Standard potting soil + 25% pumice/perlite. All three tolerate the baseline mix.",
    waterNote: "Every 5–9 days once established. Penstemon can take slightly more water than its potmates without issue if you'd rather not split schedules.",
    ingredients: [
      { common: "Monkeyflower 'Changeling'", botanical: "Diplacus 'Changeling'", qty: 1, nurserySize: "1-gal", role: "Anchor, center-back" },
      { common: "Penstemon 'Catherine de la Mare'", botanical: "Penstemon heterophyllus 'Catherine de la Mare'", qty: 1, nurserySize: "1-gal", role: "Mid-zone" },
      { common: "Idaho Fescue", botanical: "Festuca idahoensis", qty: 1, nurserySize: "4\" pot", role: "Textural filler, front edge" },
    ],
    description:
      "Bicolor cream-orange monkeyflower + blue-lavender penstemon + fine blue-gray fescue foliage. Compatible water needs, staggered bloom.",
  },
  {
    id: "combo-3",
    title: "Combo Pot 3 — Established Yarrow & Idaho Fescue",
    image: "/images/pot-yarrow-fescue.webp",
    potSize: "16\" round (existing)",
    soilMix: "Whatever mix the yarrow is already established in is fine — just top-dress with fresh mix + 25% pumice around the new fescue's root ball rather than disturbing the whole pot.",
    waterNote: "Every 5–9 days once established; this pairing tolerates slightly more frequent water than the driest pots if you're hand-watering on one schedule.",
    ingredients: [
      { common: "Island Pink Yarrow (established)", botanical: "Achillea millefolium 'Island Pink'", qty: 1, nurserySize: "already potted", role: "Anchor, established" },
      { common: "Idaho Fescue", botanical: "Festuca idahoensis", qty: 1, nurserySize: "4\" pot", role: "New addition, edge" },
    ],
    description:
      "Add fescue at the pot's edge, not center, to avoid crowding the yarrow's root mass. Best transplanted in fall or early spring.",
  },
  {
    id: "combo-4",
    title: "Combo Pot 4 — Narrowleaf Milkweed & Idaho Fescue",
    image: "/images/pot-milkweed-fescue.webp",
    potSize: "16\" round",
    soilMix: "Standard potting soil + 25% pumice/perlite. Milkweed tolerates regular potting soil better than most of this palette.",
    waterNote: "Every 5–9 days once established; this pairing tolerates slightly more frequent water than the driest pots if you're hand-watering on one schedule.",
    ingredients: [
      { common: "Narrowleaf Milkweed", botanical: "Asclepias fascicularis", qty: 1, nurserySize: "1-gal", role: "Anchor, center-back" },
      { common: "Idaho Fescue", botanical: "Festuca idahoensis", qty: 1, nurserySize: "4\" pot", role: "Year-round structure, edge" },
    ],
    description:
      "Fescue holds visual interest through the milkweed's bare winter phase. No pesticides — protects monarch caterpillars.",
  },
  {
    id: "solo-trichostema",
    title: "Solo Pot 5 — Woolly Blue Curls 'Midnight Blue'",
    image: "/images/pots-solo-trio.webp",
    potSize: "18–20\" round",
    soilMix: "Lean, extra-gritty mix: standard potting soil + 40–50% pumice/perlite/coarse sand. This plant is the most drainage-sensitive on the whole list — do not use a rich mix.",
    waterNote: "Let dry fully between waterings; check before every watering rather than following a fixed calendar. Overwatering is the #1 killer of this plant.",
    ingredients: [
      { common: "Woolly Blue Curls 'Midnight Blue'", botanical: "Trichostema lanatum 'Midnight Blue'", qty: 1, nurserySize: "1-gal", role: "Solo, center" },
    ],
    description: "Root-sensitive diva — needs its own undisturbed, fast-draining pot. Never pair it.",
  },
  {
    id: "solo-fuchsia",
    title: "Solo Pot 6 — California Fuchsia",
    image: "/images/pots-solo-trio.webp",
    potSize: "16\" round",
    soilMix: "Standard potting soil + 25–30% pumice/perlite.",
    waterNote: "Every 5–9 days once established; slightly more forgiving of watering variance than the Ceanothus/Trichostema pots.",
    ingredients: [
      { common: "California Fuchsia", botanical: "Epilobium canum", qty: 1, nurserySize: "1-gal", role: "Solo, center" },
    ],
    description: "Spreads aggressively by runners — solo prevents it from swallowing a neighbor within 2–3 seasons.",
  },
  {
    id: "solo-caramel-creeper",
    title: "Solo Pot 7 — Wild Lilac 'Caramel Creeper'",
    image: "/images/pots-solo-trio.webp",
    potSize: "16–18\" wide, shallow",
    soilMix: "Lean mix: standard potting soil + 35–40% pumice/perlite. Ceanothus family wants fast drainage even more than the general container blend.",
    waterNote: "Infrequent, deep watering — let the mix dry out well between waterings, similar rhythm to the fence-line Ceanothus but adjusted for a pot's faster dry-out.",
    ingredients: [
      { common: "Wild Lilac 'Caramel Creeper'", botanical: "Ceanothus (groundcover form)", qty: 1, nurserySize: "1-gal", role: "Solo, center" },
    ],
    description: "Ceanothus family wants to stay dry — keep it away from moderate-water companions.",
  },
];

export const pots: Pot[] = rawPots.map((p) => ({
  ...p,
  plants: p.ingredients.map((i) => i.common),
}));

export interface ShoppingLine {
  common: string;
  botanical: string;
  nurserySize: string;
  totalQty: number;
}

export const containerShoppingList: ShoppingLine[] = (() => {
  const map = new Map<string, ShoppingLine>();
  for (const pot of pots) {
    for (const ing of pot.ingredients) {
      if (ing.nurserySize === "already potted") continue;
      const key = `${ing.common}__${ing.nurserySize}`;
      const existing = map.get(key);
      if (existing) {
        existing.totalQty += ing.qty;
      } else {
        map.set(key, {
          common: ing.common,
          botanical: ing.botanical,
          nurserySize: ing.nurserySize,
          totalQty: ing.qty,
        });
      }
    }
  }
  return Array.from(map.values()).sort((a, b) => a.common.localeCompare(b.common));
})();

export const fenceShoppingList: ShoppingLine[] = fencePlants.map((p) => ({
  common: p.common,
  botanical: p.botanical,
  nurserySize: "5-gal (recommended for faster establishment)",
  totalQty: 1,
}));

export const siteInfo = {
  location: "Auburn, California",
  elevation: "1,450 ft",
  usdaZone: "9a / 9b",
  sunsetZone: "Zone 7 (Sierra Foothills)",
  winterLow: "Low-mid 20s°F on cold nights",
  summerHigh: "Regularly 95–100°F+, dry heat",
};
