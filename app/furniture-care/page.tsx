import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { PrintButton } from "@/components/print-button";
import { ProtectionLayers } from "@/components/protection-layers";
import { PriceRangeChart } from "@/components/price-range-chart";
import { SourcingTable } from "@/components/sourcing-table";
import { FurnitureShoppingList } from "@/components/furniture-shopping-list";
import {
  protectionLayers,
  productCategories,
  localStores,
  furnitureShoppingList,
} from "@/lib/furniture-care-data";

export default function FurnitureCarePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        eyebrow="Indoor Plants, Protected Surfaces"
        title="No Stains on the Furniture"
        description="Saucers alone aren't enough — unglazed pots wick moisture through their walls, condensation beads under a flush saucer on humid days, and overflow happens the day you water generously. Here's the full layered setup, with exact Auburn-area sourcing."
        action={<PrintButton label="Print this guide" />}
      />

      <div className="mb-16 overflow-hidden rounded-3xl border border-clay/30 bg-white/40">
        <Image
          src="https://g.tlcdn.com/gen/d4911447435049909bb435f4bba73a10.png"
          alt="Illustration of a potted houseplant on a saucer with pot-feet risers, showing an air gap above a wood console table"
          width={1536}
          height={1024}
          className="w-full"
          priority
          unoptimized
        />
      </div>

      <section className="mb-16">
        <ProtectionLayers layers={protectionLayers} />
      </section>

      <section className="mb-16">
        <div className="mb-6 max-w-2xl">
          <h3 className="font-display text-2xl font-semibold text-sage-dark">A Note on Cachepots</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/70">
            The method most plant stylists actually use: keep the plant in its nursery pot (with drainage holes)
            and nest that inside a decorative outer pot with <em>no</em> drainage hole — a cachepot. Water it,
            let it drain into the inner pot's own saucer for a few minutes, then set it back inside. Water never
            touches the furniture at all.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <PriceRangeChart categories={productCategories} />
      </section>

      <section className="mb-16">
        <div className="mb-8 overflow-hidden rounded-3xl border border-clay/30 bg-white/40">
          <Image
            src="https://g.tlcdn.com/gen/278ca0fe55194b949bcdb7ce072327b6.png"
            alt="Illustration lineup of five furniture-protection accessories: a plant saucer, pot feet, a cork coaster, a rolling plant caddy, and a cachepot"
            width={1536}
            height={1024}
            className="w-full"
            priority
            unoptimized
          />
        </div>
        <SectionHeading
          eyebrow="Where to Buy — Auburn, CA"
          title="Local Sourcing"
          description="Everything below is available within Auburn city limits or a short drive, plus an online fallback for exact sizing."
        />
        <SourcingTable stores={localStores} />
      </section>

      <section>
        <FurnitureShoppingList lines={furnitureShoppingList} />
      </section>
    </main>
  );
}
