"use client";

import { useMemo } from "react";
import { CalendarDays, Leaf } from "lucide-react";
import { plants, pots } from "@/lib/data";
import { useGardenLog, statusStyles } from "@/lib/planting-log";
import { SectionHeading } from "@/components/section-heading";

export default function LogPage() {
  const { store } = useGardenLog();

  const rows = useMemo(() => {
    const plantRows = plants.map((p) => ({
      key: p.slug,
      title: p.common,
      subtitle: p.botanical,
      entry: store[p.slug],
      kind: "Plant" as const,
    }));
    const potRows = pots.map((p) => ({
      key: p.id,
      title: p.title,
      subtitle: p.plants.join(" + "),
      entry: store[p.id],
      kind: "Pot" as const,
    }));

    return [...plantRows, ...potRows]
      .filter((r) => r.entry && (r.entry.plantedOn || r.entry.photos.length > 0 || r.entry.status !== "Not Planted"))
      .sort((a, b) => {
        const ad = a.entry?.plantedOn ?? "";
        const bd = b.entry?.plantedOn ?? "";
        return bd.localeCompare(ad);
      });
  }, [store]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        eyebrow="Living Log"
        title="Garden Log"
        description="A running record of what's actually in the ground and in pots — status, planting dates, and photos as you go. Saved on this device/browser."
      />

      {rows.length === 0 ? (
        <div className="rounded-3xl border border-clay/30 bg-white/40 p-12 text-center">
          <Leaf className="mx-auto mb-3 h-8 w-8 text-sage-dark/50" />
          <p className="text-ink/60">
            Nothing logged yet. Head to the{" "}
            <a href="/plants" className="font-semibold text-terracotta underline underline-offset-4">
              Plant Directory
            </a>
            ,{" "}
            <a href="/fence-line" className="font-semibold text-terracotta underline underline-offset-4">
              Fence Line
            </a>
            , or{" "}
            <a href="/containers" className="font-semibold text-terracotta underline underline-offset-4">
              Containers
            </a>{" "}
            page and log your first entry.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {rows.map(({ key, title, subtitle, entry, kind }) => {
            if (!entry) return null;
            const style = statusStyles[entry.status];
            return (
              <div
                key={key}
                className="flex flex-col gap-4 rounded-3xl border border-clay/30 bg-white/40 p-6 sm:flex-row sm:items-start"
              >
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-clay/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink/50">
                      {kind}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-sage-dark">{title}</h3>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                      style={{ backgroundColor: style.bg, color: style.text }}
                    >
                      {entry.status}
                    </span>
                  </div>
                  <p className="text-xs italic text-ink/50">{subtitle}</p>
                  {entry.plantedOn && (
                    <p className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-ink/60">
                      <CalendarDays className="h-3.5 w-3.5" />
                      Planted{" "}
                      {new Date(entry.plantedOn).toLocaleDateString(undefined, {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  )}
                  {entry.note && <p className="mt-2 text-sm leading-relaxed text-ink/70">{entry.note}</p>}
                </div>
                {entry.photos.length > 0 && (
                  <div className="flex gap-2 overflow-x-auto sm:max-w-xs">
                    {entry.photos.map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={i}
                        src={src}
                        alt={`${title} photo ${i + 1}`}
                        className="h-20 w-20 flex-none rounded-xl border border-clay/30 object-cover"
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
