import Image from "next/image";
import { AlertTriangle, CarFront } from "lucide-react";
import { parkingClearance, clearanceSiteNote, clearanceMitigations, type ClearanceRow } from "@/lib/care";

const severityStyle: Record<ClearanceRow["severity"], { bg: string; text: string }> = {
  None: { bg: "#dbe6c9", text: "#3f4b3a" },
  Minor: { bg: "#f3d6a8", text: "#8a5a1e" },
  Significant: { bg: "#e6c4bd", text: "#8a3a2e" },
};

export function ParkingClearance() {
  return (
    <div className="rounded-3xl border border-terracotta/40 bg-terracotta/5 p-8">
      <div className="mb-2 flex items-center gap-2">
        <CarFront className="h-5 w-5 text-terracotta" />
        <h3 className="font-display text-xl font-semibold text-terracotta">Parking &amp; Access Clearance</h3>
      </div>
      <p className="mb-5 text-sm leading-relaxed text-ink/70">{clearanceSiteNote}</p>

      <div className="mb-6 overflow-hidden rounded-2xl border border-clay/30 bg-white/50">
        <Image
          src="/images/fence-line-clearance.webp"
          alt="Top-down diagram showing Ceanothus and Salvia canopy overhang into the driveway/parking area at maturity"
          width={2048}
          height={1152}
          className="w-full"
        />
      </div>

      <div className="mb-6 overflow-hidden rounded-2xl border border-clay/25">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-sage-dark text-left text-parchment">
              <th className="px-4 py-2 font-semibold">Plant</th>
              <th className="px-4 py-2 font-semibold">Mature Spread</th>
              <th className="px-4 py-2 font-semibold">Canopy Edge from Fence</th>
              <th className="px-4 py-2 font-semibold">Overhang into Parking</th>
              <th className="px-4 py-2 font-semibold">Severity</th>
            </tr>
          </thead>
          <tbody>
            {parkingClearance.map((row, i) => {
              const style = severityStyle[row.severity];
              return (
                <tr key={row.plant} className={i % 2 === 0 ? "bg-white/60" : "bg-parchmentDark/30"}>
                  <td className="px-4 py-2.5 font-medium text-ink">{row.plant}</td>
                  <td className="px-4 py-2.5 text-ink/70">{row.matureSpreadFt}</td>
                  <td className="px-4 py-2.5 text-ink/70">{row.canopyEdgeFromFenceFt.toFixed(1)} ft</td>
                  <td className="px-4 py-2.5 font-semibold text-terracotta">
                    {row.overhangFt > 0 ? `${row.overhangFt.toFixed(1)} ft` : "None"}
                  </td>
                  <td className="px-4 py-2.5">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                      style={{ backgroundColor: style.bg, color: style.text }}
                    >
                      {row.severity}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mb-3 flex items-center gap-2">
        <AlertTriangle className="h-4 w-4 text-terracotta" />
        <p className="font-display text-sm font-semibold text-terracotta">
          Ways to resolve the overhang
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {clearanceMitigations.map((m, i) => (
          <div key={i} className="rounded-2xl border border-clay/25 bg-white/50 p-4">
            <p className="font-display text-sm font-semibold text-ink">{m.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-ink/70">{m.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
