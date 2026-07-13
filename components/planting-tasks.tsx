import { ClipboardList } from "lucide-react";
import type { PlantingStep } from "@/lib/care";

export function PlantingTasks({ steps }: { steps: PlantingStep[] }) {
  return (
    <div className="rounded-3xl border border-clay/30 bg-white/40 p-8">
      <div className="mb-5 flex items-center gap-2">
        <ClipboardList className="h-5 w-5 text-sage-dark" />
        <h3 className="font-display text-xl font-semibold text-sage-dark">Planting Tasks</h3>
      </div>
      <ol className="flex flex-col gap-4">
        {steps.map((s) => (
          <li key={s.step} className="flex gap-4">
            <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-sage-dark font-display text-xs font-semibold text-parchment">
              {s.step}
            </span>
            <div>
              <p className="font-display text-sm font-semibold text-ink">{s.title}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-ink/70">{s.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
