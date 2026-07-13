import { Bug } from "lucide-react";
import type { IpmTask } from "@/lib/care";

export function IpmTasks({ tasks, title = "IPM Tasks" }: { tasks: IpmTask[]; title?: string }) {
  return (
    <div className="rounded-3xl border border-clay/30 bg-white/40 p-8">
      <div className="mb-2 flex items-center gap-2">
        <Bug className="h-5 w-5 text-sage-dark" />
        <h3 className="font-display text-xl font-semibold text-sage-dark">{title}</h3>
      </div>
      <p className="mb-5 text-sm text-ink/60">
        Integrated pest management — monitor first, act only when a real threshold is crossed. Avoid
        blanket spraying; several plants here (milkweed especially) are pollinator/monarch habitat.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {tasks.map((t, i) => (
          <div key={i} className="rounded-2xl border border-clay/25 bg-parchmentDark/30 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">{t.target}</p>
            <p className="mt-1 font-display text-sm font-semibold text-ink">{t.pest}</p>
            <dl className="mt-2 flex flex-col gap-1.5 text-xs leading-relaxed text-ink/70">
              <div>
                <dt className="inline font-semibold text-sage-dark">Monitor: </dt>
                <dd className="inline">{t.monitor}</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-sage-dark">Threshold: </dt>
                <dd className="inline">{t.threshold}</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-sage-dark">Action: </dt>
                <dd className="inline">{t.action}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
