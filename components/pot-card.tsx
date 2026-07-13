import Image from "next/image";
import { Layers, Droplets } from "lucide-react";
import type { Pot } from "@/lib/data";
import { PlantingStatus } from "@/components/planting-status";

export function PotCard({ pot, index }: { pot: Pot; index: number }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-clay/30 bg-white/40">
      <div className="relative">
        <Image src={pot.image} alt={pot.title} width={1024} height={1024} className="w-full" />
        <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-sage-dark font-display text-sm font-semibold text-parchment">
          {index}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
          Diagram
        </span>
      </div>
      <div className="p-6">
        <div className="mb-1 flex items-baseline justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-sage-dark">{pot.title}</h3>
          <span className="flex-none text-xs font-semibold uppercase tracking-wide text-terracotta">
            {pot.potSize}
          </span>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-ink/70">{pot.description}</p>

        <p className="mb-2 font-display text-xs font-semibold uppercase tracking-[0.15em] text-sage-dark">
          Recipe <span className="font-body font-normal italic text-ink/40">— exact quantities, source of truth</span>
        </p>
        <ul className="mb-4 divide-y divide-clay/20 rounded-xl border border-clay/25 bg-parchmentDark/30">
          {pot.ingredients.map((ing, i) => (
            <li key={i} className="flex items-start justify-between gap-3 px-4 py-2.5">
              <div>
                <span className="font-display text-sm font-semibold text-ink">
                  {ing.qty}&times; {ing.common}
                </span>
                <p className="text-xs italic text-ink/50">{ing.botanical}</p>
              </div>
              <div className="flex-none text-right">
                <p className="text-xs font-semibold text-sage-dark">{ing.nurserySize}</p>
                <p className="text-[11px] text-ink/50">{ing.role}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mb-4 flex flex-col gap-2 rounded-xl border border-clay/25 bg-white/50 p-4 text-xs leading-relaxed text-ink/70">
          <p className="flex items-start gap-2">
            <Layers className="mt-0.5 h-3.5 w-3.5 flex-none text-sage-dark" />
            <span>
              <span className="font-semibold text-sage-dark">Soil: </span>
              {pot.soilMix}
            </span>
          </p>
          <p className="flex items-start gap-2">
            <Droplets className="mt-0.5 h-3.5 w-3.5 flex-none text-sage-dark" />
            <span>
              <span className="font-semibold text-sage-dark">Water: </span>
              {pot.waterNote}
            </span>
          </p>
        </div>

        <PlantingStatus slug={pot.id} />
      </div>
    </div>
  );
}
