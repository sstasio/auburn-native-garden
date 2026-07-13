export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-3xl font-semibold text-sage-dark sm:text-4xl">{title}</h2>
        {description && <p className="mt-3 text-base leading-relaxed text-ink/70">{description}</p>}
      </div>
      {action && <div className="flex-none">{action}</div>}
    </div>
  );
}
