import { SectionHeading } from "@/components/section-heading";
import { PlantDirectory } from "@/components/plant-directory";

export default function PlantsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        eyebrow="Full Reference"
        title="Plant Directory"
        description="Every plant in the plan, searchable and filterable — water needs, sun, mature size, and pairing notes at a glance."
      />
      <PlantDirectory />
    </main>
  );
}
