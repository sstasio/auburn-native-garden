import { Layers } from "lucide-react";
import type { ProtectionLayer } from "@/lib/furniture-care-data";

export function ProtectionLayers({ layers }: { layers: ProtectionLayer[] }) {
  return (
    <div className="rounded-3xl border border-clay/30 bg-white/40 p-8">
      <div className="mb-6 flex items-center gap-2">
        <Layers className="h-5 w-5 text-terracotta" />
        <h3 className="font-display text-xl font-semibold text-sage-dark">The Five Layers, Top to Bottom</h3>
      </div>
      <ol className="space-y-0">
        {layers.map((layer, i) => (
          <li key={layer.id} className="relative flex gap-4 pb-8 last:pb-0">
            {i < layers.length - 1 && (
              <span className="absolute left-[15px] top-8 h-full w-px bg-clay/30" aria-hidden />
            )}
            <span className="relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 border-sage-dark bg-parchment font-display text-xs font-semibold text-sage-dark">
              {i + 1}
            </span>
            <div className="pt-0.5">
              <p className="font-display text-sm font-semibold text-sage-dark">{layer.title.replace(/^\d+\.\s*/, "")}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink/70">{layer.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
