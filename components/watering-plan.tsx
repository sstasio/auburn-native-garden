import { Droplets } from "lucide-react";
import type { WateringPlan } from "@/lib/care";

export function WateringPlanCard({ plan }: { plan: WateringPlan }) {
  return (
    <div className="rounded-3xl border border-clay/30 bg-white/40 p-8">
      <div className="mb-4 flex items-center gap-2">
        <Droplets className="h-5 w-5 text-sage-dark" />
        <h3 className="font-display text-xl font-semibold text-sage-dark">{plan.title}</h3>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {plan.stages.map((s, i) => (
          <div key={i} className="rounded-2xl border border-clay/25 bg-parchmentDark/30 p-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-terracotta">{s.stage}</p>
            <p className="mb-2 font-display text-sm font-semibold text-ink">{s.frequency}</p>
            <p className="text-xs leading-relaxed text-ink/70">{s.notes}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 rounded-xl bg-sage/10 p-4 text-xs leading-relaxed text-sage-dark">{plan.zoneNote}</p>
    </div>
  );
}
