"use client";

import { useState } from "react";
import type { ProductCategory } from "@/lib/furniture-care-data";
import { cn } from "@/lib/utils";

const CHART_MAX = 85;

export function PriceRangeChart({ categories }: { categories: ProductCategory[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="rounded-3xl border border-sage-dark/30 bg-sage/5 p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold text-sage-dark">Typical Price Range by Product</h3>
          <p className="mt-1 text-xs text-ink/60">Street prices seen at Auburn-area retailers and major online sellers.</p>
        </div>
        <button
          onClick={() => setShowTable((v) => !v)}
          className="rounded-full border border-sage-dark/30 px-3 py-1.5 text-xs font-semibold text-sage-dark transition-colors hover:bg-sage-dark/10 print:hidden"
        >
          {showTable ? "Show chart" : "Show table"}
        </button>
      </div>

      {showTable ? (
        <div className="overflow-hidden rounded-xl border border-clay/25">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-sage-dark text-left text-parchment">
                <th className="px-4 py-2 font-semibold">Product</th>
                <th className="px-4 py-2 text-right font-semibold">Low</th>
                <th className="px-4 py-2 text-right font-semibold">High</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((c, i) => (
                <tr key={c.id} className={i % 2 === 0 ? "bg-white/50" : "bg-parchmentDark/30"}>
                  <td className="px-4 py-2.5 font-medium text-ink">{c.name}</td>
                  <td className="px-4 py-2.5 text-right text-ink/70">${c.lowPrice}</td>
                  <td className="px-4 py-2.5 text-right font-semibold text-sage-dark">${c.highPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {categories.map((c) => {
            const leftPct = (c.lowPrice / CHART_MAX) * 100;
            const widthPct = ((c.highPrice - c.lowPrice) / CHART_MAX) * 100;
            const isHovered = hovered === c.id;
            return (
              <div
                key={c.id}
                className="group"
                onMouseEnter={() => setHovered(c.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="mb-1.5 flex items-baseline justify-between gap-2">
                  <span className="font-display text-sm font-semibold text-sage-dark">{c.name}</span>
                  <span className="text-xs font-semibold text-ink/70">
                    ${c.lowPrice}&ndash;${c.highPrice}
                  </span>
                </div>
                <div className="relative h-5 w-full rounded-full bg-parchmentDark/60">
                  <div
                    className={cn(
                      "absolute top-0 h-5 rounded-full bg-sage-dark transition-opacity",
                      isHovered ? "opacity-100" : "opacity-85"
                    )}
                    style={{ left: `${leftPct}%`, width: `${Math.max(widthPct, 3)}%` }}
                  />
                </div>
                <p
                  className={cn(
                    "mt-1.5 max-w-xl text-xs leading-relaxed text-ink/60 transition-opacity",
                    isHovered ? "opacity-100" : "opacity-0 sm:opacity-60"
                  )}
                >
                  {c.note}
                </p>
              </div>
            );
          })}
          <p className="mt-1 text-[11px] text-ink/40">Axis: $0 &ndash; ${CHART_MAX}. Hover a bar for sourcing notes.</p>
        </div>
      )}
    </div>
  );
}
