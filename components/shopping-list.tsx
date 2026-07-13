"use client";

import { ShoppingCart, Check } from "lucide-react";
import type { ShoppingLine } from "@/lib/data";
import { useShoppingChecklist } from "@/lib/shopping-checklist";
import { cn } from "@/lib/utils";

export function ShoppingList({
  title,
  lines,
}: {
  title: string;
  lines: ShoppingLine[];
}) {
  const { store, toggle } = useShoppingChecklist();
  const totalPlants = lines.reduce((sum, l) => sum + l.totalQty, 0);
  const checkedCount = lines.filter((l) => store[`${title}__${l.common}__${l.nurserySize}`]).length;

  return (
    <div className="rounded-3xl border border-sage-dark/30 bg-sage/5 p-8 print:border-black/30 print:bg-white">
      <div className="mb-4 flex items-center gap-2">
        <ShoppingCart className="h-5 w-5 text-sage-dark" />
        <h3 className="font-display text-xl font-semibold text-sage-dark">{title}</h3>
        <span className="ml-auto rounded-full bg-sage-dark/10 px-3 py-1 text-xs font-semibold text-sage-dark print:hidden">
          {checkedCount} / {lines.length} checked · {totalPlants} plants total
        </span>
      </div>
      <div className="overflow-hidden rounded-xl border border-clay/25">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-sage-dark text-left text-parchment print:bg-white print:text-black print:border-b print:border-black">
              <th className="w-10 px-4 py-2 print:hidden"></th>
              <th className="px-4 py-2 font-semibold">Plant</th>
              <th className="px-4 py-2 font-semibold">Nursery Size</th>
              <th className="px-4 py-2 text-right font-semibold">Qty</th>
            </tr>
          </thead>
          <tbody>
            {lines.map((line, i) => {
              const key = `${title}__${line.common}__${line.nurserySize}`;
              const checked = !!store[key];
              return (
                <tr
                  key={i}
                  className={cn(
                    i % 2 === 0 ? "bg-white/50" : "bg-parchmentDark/30",
                    checked && "opacity-50"
                  )}
                >
                  <td className="px-4 py-2.5 print:hidden">
                    <button
                      onClick={() => toggle(key)}
                      className={cn(
                        "flex h-5 w-5 items-center justify-center rounded-md border transition-colors",
                        checked ? "border-sage-dark bg-sage-dark text-parchment" : "border-clay/50 bg-white/60"
                      )}
                      aria-label={checked ? "Mark as not purchased" : "Mark as purchased"}
                    >
                      {checked && <Check className="h-3.5 w-3.5" />}
                    </button>
                  </td>
                  <td className={cn("px-4 py-2.5", checked && "line-through")}>
                    <p className="font-medium text-ink">{line.common}</p>
                    <p className="text-xs italic text-ink/50">{line.botanical}</p>
                  </td>
                  <td className="px-4 py-2.5 text-ink/70">{line.nurserySize}</td>
                  <td className="px-4 py-2.5 text-right font-display font-semibold text-sage-dark">
                    {line.totalQty}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-ink/50 print:hidden">
        Checkmarks save to this browser — tick items off as you buy them at the nursery.
      </p>
    </div>
  );
}
