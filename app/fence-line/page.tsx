import Image from "next/image";
import { Ruler, Droplets, Sun } from "lucide-react";
import { fencePlants, fenceShoppingList } from "@/lib/data";
import { fenceLinePlantingSteps, fenceLineWatering, ipmTasks } from "@/lib/care";
import { SectionHeading } from "@/components/section-heading";
import { PlantingStatus } from "@/components/planting-status";
import { ShoppingList } from "@/components/shopping-list";
import { PlantingTasks } from "@/components/planting-tasks";
import { WateringPlanCard } from "@/components/watering-plan";
import { IpmTasks } from "@/components/ipm-tasks";
import { ParkingClearance } from "@/components/parking-clearance";
import { PrintButton } from "@/components/print-button";

export default function FenceLinePage() {
  const fenceIpmTasks = ipmTasks.filter((t) =>
    /ceanothus|salvia|pozo blue|gopher|deer/i.test(t.target)
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        eyebrow="Part One — In Ground"
        title="Fence Line Planting"
        description="Three shrubs, one linear run. Give this trio its own irrigation zone — infrequent, deep watering once established is what keeps Ceanothus alive long-term."
        action={<PrintButton label="Print planting plan" />}
      />

      <div className="mb-8 overflow-hidden rounded-3xl border border-clay/30 bg-white/40">
        <Image
          src="/images/fence-line.webp"
          alt="Fence line layout diagram showing Ceanothus Ray Hartman, Dark Star, and Salvia Pozo Blue spacing"
          width={2048}
          height={1152}
          className="w-full"
        />
      </div>

      <div className="mb-12">
        <ParkingClearance />
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {fencePlants.map((plant, i) => (
          <div
            key={plant.slug}
            className="flex flex-col rounded-3xl border border-clay/30 bg-white/40 p-6"
          >
            <span
              className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold text-white"
              style={{ backgroundColor: plant.bloomColor }}
            >
              {i + 1}
            </span>
            <h3 className="font-display text-xl font-semibold text-sage-dark">{plant.common}</h3>
            <p className="mb-3 text-sm italic text-ink/50">{plant.botanical}</p>
            <div className="mb-4 flex flex-wrap gap-3 text-xs font-medium text-ink/60">
              <span className="inline-flex items-center gap-1">
                <Ruler className="h-3.5 w-3.5" /> {plant.size}
              </span>
              <span className="inline-flex items-center gap-1">
                <Droplets className="h-3.5 w-3.5" /> {plant.water}
              </span>
              <span className="inline-flex items-center gap-1">
                <Sun className="h-3.5 w-3.5" /> {plant.sun}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-ink/70">{plant.notes}</p>
            <PlantingStatus slug={plant.slug} />
          </div>
        ))}
      </div>

      <div className="mt-12">
        <ShoppingList title="Fence Line Shopping List" lines={fenceShoppingList} />
      </div>

      <div className="mt-8">
        <PlantingTasks steps={fenceLinePlantingSteps} />
      </div>

      <div className="mt-8">
        <WateringPlanCard plan={fenceLineWatering} />
      </div>

      <div className="mt-8">
        <IpmTasks tasks={fenceIpmTasks} title="IPM Tasks — Fence Line" />
      </div>

      <div className="mt-8 rounded-3xl border border-terracotta/30 bg-terracotta/5 p-8">
        <h3 className="font-display text-xl font-semibold text-terracotta">Irrigation zoning matters</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70">
          Ceanothus root rot from shared irrigation is the single biggest
          cause of failure for this pairing. Once established (year 2+), keep
          'Ray Hartman' and 'Dark Star' on a dry, infrequent-water schedule —
          separate from 'Pozo Blue' if your soil doesn't drain fast, and
          entirely separate from any container plants nearby.
        </p>
      </div>
    </main>
  );
}
