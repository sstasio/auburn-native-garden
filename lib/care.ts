export interface PlantingStep {
  step: number;
  title: string;
  detail: string;
}

export const fenceLinePlantingSteps: PlantingStep[] = [
  {
    step: 1,
    title: "Time it right",
    detail:
      "Plant in fall through early spring (Oct–Mar) so roots establish during Auburn's cool, wet season before facing their first dry summer. Avoid planting in the heat of summer.",
  },
  {
    step: 2,
    title: "Dig a wide, shallow hole",
    detail:
      "Dig 2x the width of the root ball but only as deep as the root ball itself — planting too deep is the #1 cause of crown rot in native shrubs. The root crown should sit slightly above grade.",
  },
  {
    step: 3,
    title: "Skip the amendments",
    detail:
      "Do not add compost, fertilizer, or bagged planting mix to the hole. These natives are adapted to lean native soil — rich backfill encourages girdling roots and rot, especially for the Ceanothus.",
  },
  {
    step: 4,
    title: "Loosen the root ball",
    detail:
      "Gently score or tease circling roots at the root ball's edge before placing in the hole, especially if the plant is at all root-bound. This is critical for Ceanothus, which is prone to girdling roots in containers.",
  },
  {
    step: 5,
    title: "Backfill with native soil",
    detail:
      "Backfill with the same soil you dug out. Firm gently — don't compact — and water in slowly to settle air pockets.",
  },
  {
    step: 6,
    title: "Mulch, but keep it off the crown",
    detail:
      "Apply 2–3 inches of coarse mulch (bark or gravel) starting 4–6 inches away from the trunk/crown. Mulch touching the stem invites crown rot.",
  },
  {
    step: 7,
    title: "Establish with a temporary deep-water schedule",
    detail:
      "Water deeply once at planting, then roughly weekly for the first 2–3 months (adjust down in cool winter months), tapering to monthly by the end of year one. See the Watering & Irrigation section for the full establishment timeline.",
  },
  {
    step: 8,
    title: "Stake only if needed",
    detail:
      "'Ray Hartman' may need a single loose stake for its first year if being trained as a small tree. Remove staking as soon as it can stand unsupported — don't leave ties on more than one growing season.",
  },
];

export interface WateringStage {
  stage: string;
  frequency: string;
  notes: string;
}

export interface WateringPlan {
  id: string;
  title: string;
  stages: WateringStage[];
  zoneNote: string;
}

export const fenceLineWatering: WateringPlan = {
  id: "fence-line",
  title: "Fence Line — Ceanothus & Salvia 'Pozo Blue'",
  stages: [
    {
      stage: "Weeks 1–4 after planting",
      frequency: "Deep water 2x per week",
      notes: "Soak the full root zone, then let the top few inches dry before the next watering.",
    },
    {
      stage: "Months 2–6 (year 1)",
      frequency: "Deep water 1x per week, tapering to every 10–14 days by month 6",
      notes: "Reduce further through fall/winter rains — supplement only if a dry spell exceeds 3–4 weeks.",
    },
    {
      stage: "Year 2 onward (established)",
      frequency: "Infrequent deep water, roughly monthly in summer only",
      notes:
        "Once established, these want to be dry. Overwatering mature Ceanothus is the single most common cause of failure — err toward less, not more.",
    },
  ],
  zoneNote:
    "Keep this trio on its own irrigation valve/zone, separate from container plants and anything on a regular schedule. If your soil doesn't drain fast, give 'Pozo Blue' a slightly wetter sub-zone rather than sharing the Ceanothus line.",
};

export const containerWatering: WateringPlan = {
  id: "containers",
  title: "All Container Pots",
  stages: [
    {
      stage: "First 2–4 weeks after planting",
      frequency: "Check every 2–3 days",
      notes: "New roots haven't spread into the mix yet — water when the top 1–2 inches are dry, not on a fixed calendar.",
    },
    {
      stage: "Established (spring/fall)",
      frequency: "Every 5–9 days, weather-dependent",
      notes: "Check moisture at 2–3\" depth with a finger or moisture meter before watering; containers dry faster than in-ground beds.",
    },
    {
      stage: "Peak summer heat (95°F+ days)",
      frequency: "Every 3–5 days for most pots; daily check on Trichostema and Caramel Creeper pots for wilting",
      notes:
        "Very-low-water specimens (Trichostema, Caramel Creeper) still need occasional summer water in a pot — containers heat up and dry out faster than the ground these plants evolved in. Never let them bone-dry to the point of wilting repeatedly.",
    },
    {
      stage: "Winter",
      frequency: "Minimal — rain-fed in most weeks",
      notes: "Ensure drainage holes are clear so winter rain doesn't pool and rot roots, especially in the Trichostema and Caramel Creeper pots.",
    },
  ],
  zoneNote:
    "Milkweed and yarrow pots can tolerate slightly more frequent water than the Ceanothus/Trichostema pots — if you're hand-watering rather than zoning by drip line, water the Combo 3/4 pots first and let the solo dry-lovers go longer between waterings.",
};

export interface IpmTask {
  target: string;
  pest: string;
  monitor: string;
  threshold: string;
  action: string;
}

export const ipmTasks: IpmTask[] = [
  {
    target: "Ceanothus ('Ray Hartman', 'Dark Star', 'Caramel Creeper')",
    pest: "Ceanothus stem gall moth",
    monitor: "Check stems monthly spring–summer for swollen, woody galls.",
    threshold: "A few galls are cosmetic and don't need action.",
    action: "Prune out and dispose of heavily galled stems in winter dormancy. Avoid overhead irrigation, which stresses plants and invites more pest pressure.",
  },
  {
    target: "Ceanothus (all forms)",
    pest: "Root rot (Phytophthora)",
    monitor: "Watch for sudden wilting, yellowing, or dieback despite normal watering — often irrigation-related, not a true 'pest.'",
    threshold: "Any sudden wilt on an established plant is an immediate flag.",
    action: "Cut back irrigation immediately, improve drainage, and do not fertilize. This is usually fatal if caught late, so prevention (proper watering discipline) is the real fix.",
  },
  {
    target: "Salvia 'Pozo Blue'",
    pest: "Powdery mildew",
    monitor: "Check leaves in late spring/early summer for white, dusty coating, especially after cool damp nights.",
    threshold: "Light coating on a few leaves — monitor only.",
    action: "Improve airflow by thinning dense growth; avoid overhead watering. Remove heavily affected leaves. Rarely needs a fungicide in a dry foothill climate.",
  },
  {
    target: "Narrowleaf Milkweed",
    pest: "Oleander/milkweed aphids",
    monitor: "Check stems and buds weekly in summer — bright yellow aphid clusters are easy to spot.",
    threshold: "Light-to-moderate infestation is normal and usually self-regulates via ladybugs/lacewings.",
    action: "Never spray insecticide (including 'organic' options like neem or pyrethrin) — residue harms monarch eggs and caterpillars. Hand-squish small clusters or hose off with water if severe.",
  },
  {
    target: "Narrowleaf Milkweed",
    pest: "Monarch caterpillars & OE (a monarch protozoan parasite)",
    monitor: "Check for chewed leaves, caterpillars, and chrysalises spring–fall.",
    threshold: "N/A — this is the desired outcome, not a pest problem.",
    action: "Cut plants back hard in late fall/winter dormancy to reduce OE parasite buildup on old growth, consistent with current monarch-conservation guidance for perennial milkweed.",
  },
  {
    target: "Monardella, Penstemon, Verbena (soft-leaved perennials)",
    pest: "Spider mites",
    monitor: "Look for stippled, dusty-looking foliage and fine webbing in hot, dry weather — most likely on drought-stressed plants.",
    threshold: "A few stippled leaves — monitor only.",
    action: "Rinse foliage with a strong water spray weekly during outbreaks; keep plants from drying out completely, which is the main trigger for mite population booms.",
  },
  {
    target: "Any container pot",
    pest: "Snails & slugs",
    monitor: "Check new tender growth in morning, especially after watering — look for ragged holes and slime trails.",
    threshold: "A few nibbles on new growth.",
    action: "Hand-pick in the evening/morning; keep mulch away from stems; avoid overwatering, which creates the damp conditions they favor.",
  },
  {
    target: "All fence-line & container plants",
    pest: "Gophers / deer",
    monitor: "Watch for sudden disappearance of whole plants (gophers) or browsed/stripped foliage overnight (deer).",
    threshold: "Any sign in a new planting — most of this list is deer-resistant but not deer-proof when young and tender.",
    action: "Line new in-ground planting holes with gopher wire basket at installation. Use temporary wire cages or repellent spray on young plants until established; most of this palette becomes deer-resistant once mature and less tender.",
  },
];

export interface ClearanceRow {
  plant: string;
  plantOffsetFt: number;
  matureSpreadFt: string;
  canopyEdgeFromFenceFt: number;
  overhangFt: number;
  severity: "None" | "Minor" | "Significant";
}

export const parkingClearance: ClearanceRow[] = [
  {
    plant: "Ceanothus 'Ray Hartman'",
    plantOffsetFt: 3.5,
    matureSpreadFt: "12–20 ft",
    canopyEdgeFromFenceFt: 11.5,
    overhangFt: 7.5,
    severity: "Significant",
  },
  {
    plant: "Ceanothus 'Dark Star'",
    plantOffsetFt: 3.5,
    matureSpreadFt: "6–10 ft",
    canopyEdgeFromFenceFt: 7.5,
    overhangFt: 3.5,
    severity: "Significant",
  },
  {
    plant: "Salvia 'Pozo Blue'",
    plantOffsetFt: 2.5,
    matureSpreadFt: "4–6 ft",
    canopyEdgeFromFenceFt: 5.0,
    overhangFt: 1.0,
    severity: "Minor",
  },
];

export const clearanceSiteNote =
  "Based on a ~40 ft fence run and a ~4 ft setback from fence to driveway edge (your reported 3–5 ft 'tight' range) with open parking and no walkway/gate to protect.";

export const clearanceMitigations = [
  {
    title: "Train 'Ray Hartman' as a high-canopy small tree",
    detail:
      "Limb up the lower branches over the first 2–3 years so the canopy starts 7+ ft above grade. Vehicles can then pull partly underneath the overhang without contact — this is a common technique for this exact cultivar in tight urban/suburban settings. Requires ongoing formative pruning; won't fully solve overhang for low vehicles like a lifted truck cab, but clears sedans/SUVs.",
  },
  {
    title: "Swap 'Ray Hartman' for a more compact cultivar",
    detail:
      "Consider Ceanothus 'Concha' (6–8 ft tall/wide) or 'Frosty Blue' (6–7 ft) in place of 'Ray Hartman' at this tight spot — still a strong screening shrub, but roughly half the mature spread, cutting overhang to something manageable with routine shearing alone.",
  },
  {
    title: "Commit to annual hard shearing",
    detail:
      "Ceanothus tolerates a post-bloom shear reasonably well if done consistently every year (not sporadically). This can hold width down, but it's ongoing maintenance, not a one-time fix — skipping a year or two will let it reclaim the setback.",
  },
  {
    title: "Increase the planting offset from the fence itself",
    detail:
      "If any part of your fence run has a slightly deeper bed available, plant 'Ray Hartman' there instead and reserve the tightest 3–5 ft section for 'Pozo Blue' or a groundcover form, which has effectively no overhang risk at this setback.",
  },
];
