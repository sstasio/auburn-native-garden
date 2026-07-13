"use client";

import { useMemo, useState } from "react";
import { Search, Droplets, Sun, Ruler } from "lucide-react";
import { plants as allPlants, type Plant } from "@/lib/data";
import { cn } from "@/lib/utils";
import { PlantingStatus } from "@/components/planting-status";

const filters = ["All", "Fence Line", "Container"] as const;

export function PlantDirectory() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(() => {
    return allPlants.filter((p) => {
      const matchesFilter = filter === "All" || p.category === filter;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.common.toLowerCase().includes(q) ||
        p.botanical.toLowerCase().includes(q) ||
        p.notes.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [query, filter]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search plants..."
            className="w-full rounded-full border border-clay/40 bg-white/60 py-2.5 pl-9 pr-4 text-sm text-ink outline-none placeholder:text-ink/40 focus:border-sage-dark"
          />
        </div>
        <div className="flex gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors",
                filter === f
                  ? "bg-sage-dark text-parchment"
                  : "border border-clay/40 text-ink/60 hover:bg-clay/10"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-3xl border border-clay/30 bg-white/40 p-10 text-center text-ink/60">
          No plants match &quot;{query}&quot;.
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((plant) => (
            <PlantRow key={plant.slug} plant={plant} />
          ))}
        </div>
      )}
    </div>
  );
}

function PlantRow({ plant }: { plant: Plant }) {
  return (
    <div className="flex flex-col rounded-3xl border border-clay/30 bg-white/40 p-6">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-lg font-semibold leading-tight text-sage-dark">{plant.common}</h3>
          <p className="text-xs italic text-ink/50">{plant.botanical}</p>
        </div>
        <span
          className="mt-1 h-4 w-4 flex-none rounded-full border border-black/10"
          style={{ backgroundColor: plant.bloomColor }}
          title={`Bloom: ${plant.bloom}`}
        />
      </div>
      <span
        className={cn(
          "mb-3 inline-block w-fit rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
          plant.category === "Fence Line" ? "bg-terracotta/10 text-terracotta" : "bg-sage/10 text-sage-dark"
        )}
      >
        {plant.category}
      </span>
      <div className="mb-3 flex flex-wrap gap-3 text-xs font-medium text-ink/60">
        <span className="inline-flex items-center gap-1">
          <Ruler className="h-3.5 w-3.5" /> {plant.size}
        </span>
        <span className="inline-flex items-center gap-1">
          <Droplets className="h-3.5 w-3.5" /> {plant.water}
        </span>
        <span className="inline-flex items-center gap-1">
          <Sun className="h-3.5 w-3.5" /> {plant.sun}
        </span>
      </div>
      {plant.potPairing && (
        <p className="mb-2 text-xs font-semibold text-terracotta">{plant.potPairing}</p>
      )}
      <p className="text-sm leading-relaxed text-ink/70">{plant.notes}</p>
      <PlantingStatus slug={plant.slug} />
    </div>
  );
}
