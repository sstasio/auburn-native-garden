import Link from "next/link";
import { MapPin, Sun, Snowflake, ArrowRight, Home as HomeIcon } from "lucide-react";
import { siteInfo, plants } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export default function HomePage() {
  const fenceCount = plants.filter((p) => p.category === "Fence Line").length;
  const containerCount = plants.filter((p) => p.category === "Container").length;

  return (
    <main className="relative z-0">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pt-24">
        <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">
          A California Native Planting Plan
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-sage-dark sm:text-6xl">
          Fence lines &amp; containers,
          <br />
          <span className="italic text-terracotta">built for the foothills.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
          A working reference for a native-plant garden in Auburn, California —
          three anchor shrubs along the fence, nine container groupings on the
          patio, and full care specs for every plant in between.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/fence-line"
            className="inline-flex items-center gap-2 rounded-full bg-sage-dark px-6 py-3 text-sm font-semibold text-parchment transition-transform hover:-translate-y-0.5"
          >
            View Fence Line Plan <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/containers"
            className="inline-flex items-center gap-2 rounded-full border border-sage-dark/40 px-6 py-3 text-sm font-semibold text-sage-dark transition-transform hover:-translate-y-0.5"
          >
            View Container Plan <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-y border-clay/30 bg-parchmentDark/60">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
          <Stat icon={MapPin} label="Location" value={siteInfo.location} sub={`${siteInfo.elevation} elevation`} />
          <Stat icon={Sun} label="USDA Zone" value={siteInfo.usdaZone} sub={siteInfo.sunsetZone} />
          <Stat icon={Snowflake} label="Winter Low" value={siteInfo.winterLow} />
          <Stat icon={HomeIcon} label="Plants Total" value={`${fenceCount + containerCount}`} sub={`${fenceCount} fence · ${containerCount} container`} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Why This Layout"
          title="Two settings, matched to real conditions"
          description="Auburn's dry summer heat and cold winter nights ruled out the coastal-dune palette that inspired this project. Every plant here is picked for the Sierra foothill climate, and grouped by root behavior, not just looks."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <PlanCard
            href="/fence-line"
            title="Fence Line — In Ground"
            description="Ceanothus 'Ray Hartman', 'Dark Star', and Salvia 'Pozo Blue' anchor the property line as a long-lived, low-water screen."
            tag={`${fenceCount} plants`}
            image="/images/fence-line.webp"
          />
          <PlanCard
            href="/containers"
            title="Containers — Patio"
            description="Nine container groupings — some solo, some paired — sized and spaced for root health, not just aesthetics."
            tag="9 pots"
            image="/images/pot-verbena-coyotemint.webp"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-clay/30 bg-parchmentDark/50 p-8 sm:p-12">
          <h3 className="font-display text-2xl font-semibold text-sage-dark">A note on watering zones</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink/70">
            The single most common way to lose Ceanothus (and several other
            plants here) is overwatering once established. Keep the fence-line
            trio on its own infrequent-water irrigation zone, separate from
            anything that wants regular summer moisture — see the{" "}
            <Link href="/plants" className="font-semibold text-terracotta underline underline-offset-4">
              Plant Directory
            </Link>{" "}
            for water needs at a glance.
          </p>
        </div>
      </section>
    </main>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <Icon className="h-5 w-5 text-terracotta" />
      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink/50">{label}</p>
      <p className="font-display text-xl font-semibold text-sage-dark">{value}</p>
      {sub && <p className="text-xs text-ink/60">{sub}</p>}
    </div>
  );
}

function PlanCard({
  href,
  title,
  description,
  tag,
  image,
}: {
  href: string;
  title: string;
  description: string;
  tag: string;
  image: string;
}) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-3xl border border-clay/30 bg-white/40 transition-shadow hover:shadow-xl"
    >
      <div
        className="h-56 w-full bg-cover bg-center bg-parchmentDark"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-6">
        <span className="mb-3 inline-block rounded-full bg-sage-dark/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sage-dark">
          {tag}
        </span>
        <h3 className="font-display text-xl font-semibold text-sage-dark">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/70">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-terracotta">
          Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
