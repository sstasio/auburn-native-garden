import { MapPin, Phone } from "lucide-react";
import type { LocalStore } from "@/lib/furniture-care-data";

export function SourcingTable({ stores }: { stores: LocalStore[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {stores.map((store) => (
        <div key={store.id} className="rounded-2xl border border-clay/30 bg-white/40 p-6">
          <div className="mb-2 flex items-start justify-between gap-2">
            <h4 className="font-display text-base font-semibold text-sage-dark">{store.name}</h4>
            <span className="flex-none rounded-full bg-terracotta/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-terracotta">
              {store.distance}
            </span>
          </div>
          <p className="mb-1 flex items-start gap-1.5 text-xs text-ink/60">
            <MapPin className="mt-0.5 h-3.5 w-3.5 flex-none text-ink/40" />
            {store.address}
          </p>
          {store.phone && (
            <p className="mb-3 flex items-center gap-1.5 text-xs text-ink/60">
              <Phone className="h-3.5 w-3.5 flex-none text-ink/40" />
              {store.phone}
            </p>
          )}
          <div className="mb-3 flex flex-wrap gap-1.5">
            {store.carries.map((c) => (
              <span key={c} className="rounded-full bg-sage-dark/10 px-2.5 py-1 text-[11px] font-semibold text-sage-dark">
                {c}
              </span>
            ))}
          </div>
          <p className="text-xs leading-relaxed text-ink/70">{store.note}</p>
        </div>
      ))}
    </div>
  );
}
