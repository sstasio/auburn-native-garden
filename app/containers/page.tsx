import { pots, containerShoppingList } from "@/lib/data";
import { containerWatering, ipmTasks } from "@/lib/care";
import { SectionHeading } from "@/components/section-heading";
import { PotCard } from "@/components/pot-card";
import { ShoppingList } from "@/components/shopping-list";
import { PrintButton } from "@/components/print-button";
import { WateringPlanCard } from "@/components/watering-plan";
import { IpmTasks } from "@/components/ipm-tasks";

export default function ContainersPage() {
  const containerIpmTasks = ipmTasks.filter((t) =>
    /monardella|penstemon|verbena|milkweed|snail|slug|caramel creeper|any container/i.test(t.target)
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        eyebrow="Part Two — Patio Containers"
        title="Container Recipes"
        description="Seven pots, each with an exact ingredient list — plant, quantity, nursery size, role, soil mix, and watering rhythm."
        action={<PrintButton label="Print recipes & shopping list" />}
      />
      <div className="grid gap-8 sm:grid-cols-2">
        {pots.map((pot, i) => (
          <PotCard key={pot.id} pot={pot} index={i + 1} />
        ))}
      </div>

      <div className="mt-12">
        <ShoppingList title="Container Shopping List" lines={containerShoppingList} />
      </div>

      <div className="mt-8">
        <WateringPlanCard plan={containerWatering} />
      </div>

      <div className="mt-8">
        <IpmTasks tasks={containerIpmTasks} title="IPM Tasks — Containers" />
      </div>

      <div className="mt-8 rounded-3xl border border-clay/30 bg-parchmentDark/50 p-8">
        <h3 className="font-display text-xl font-semibold text-sage-dark">Universal baseline</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70">
          Full sun (6+ hours) across every pot on this page. Individual soil
          mix and watering notes are called out per pot above — the driest
          specimens (Trichostema, Caramel Creeper) need a leaner mix and
          longer dry-out between waterings than the rest.
        </p>
      </div>
    </main>
  );
}
