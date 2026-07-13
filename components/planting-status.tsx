"use client";

import { useRef, useState } from "react";
import { Camera, CalendarDays, ChevronDown, X } from "lucide-react";
import {
  useGardenLog,
  fileToResizedDataUrl,
  statusStyles,
  type PlantStatus,
} from "@/lib/planting-log";
import { cn } from "@/lib/utils";

const statuses: PlantStatus[] = ["Not Planted", "Planted", "Established", "Struggling", "Removed"];

export function PlantingStatus({ slug }: { slug: string }) {
  const { getEntry, saveEntry } = useGardenLog();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const entry = getEntry(slug);
  const style = statusStyles[entry.status];

  async function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setBusy(true);
    try {
      const newPhotos: string[] = [];
      for (const file of Array.from(files).slice(0, 4)) {
        newPhotos.push(await fileToResizedDataUrl(file));
      }
      saveEntry(slug, { photos: [...entry.photos, ...newPhotos].slice(-6) });
    } finally {
      setBusy(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  function removePhoto(idx: number) {
    saveEntry(slug, { photos: entry.photos.filter((_, i) => i !== idx) });
  }

  return (
    <div className="mt-4 rounded-2xl border border-clay/30 bg-parchmentDark/40 p-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left"
      >
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: style.bg, color: style.text }}
        >
          {entry.status}
          {entry.plantedOn && (
            <span className="opacity-70">
              · {new Date(entry.plantedOn).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
            </span>
          )}
        </span>
        <ChevronDown className={cn("h-4 w-4 text-ink/50 transition-transform", open && "rotate-180")} />
      </button>

      {entry.photos.length > 0 && (
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {entry.photos.map((src, i) => (
            <div key={i} className="relative h-16 w-16 flex-none overflow-hidden rounded-lg border border-clay/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="h-full w-full object-cover" />
              {open && (
                <button
                  onClick={() => removePhoto(i)}
                  className="absolute right-0.5 top-0.5 rounded-full bg-black/60 p-0.5 text-white"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {open && (
        <div className="mt-4 flex flex-col gap-3">
          <div className="flex flex-wrap gap-1.5">
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => saveEntry(slug, { status: s })}
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                  entry.status === s
                    ? "bg-sage-dark text-parchment"
                    : "border border-clay/40 text-ink/60 hover:bg-clay/10"
                )}
              >
                {s}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2 text-xs font-medium text-ink/60">
            <CalendarDays className="h-3.5 w-3.5" />
            Planted on
            <input
              type="date"
              value={entry.plantedOn ?? ""}
              onChange={(e) => saveEntry(slug, { plantedOn: e.target.value })}
              className="rounded-md border border-clay/40 bg-white/70 px-2 py-1 text-xs text-ink"
            />
          </label>

          <textarea
            placeholder="Notes on this plant's progress..."
            defaultValue={entry.note ?? ""}
            onBlur={(e) => saveEntry(slug, { note: e.target.value })}
            rows={2}
            className="w-full rounded-md border border-clay/40 bg-white/70 px-3 py-2 text-xs text-ink placeholder:text-ink/40"
          />

          <button
            onClick={() => fileRef.current?.click()}
            disabled={busy}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-sage-dark/40 px-3 py-1.5 text-xs font-semibold text-sage-dark disabled:opacity-50"
          >
            <Camera className="h-3.5 w-3.5" /> {busy ? "Processing…" : "Add photo(s)"}
          </button>
          <input ref={fileRef} type="file" accept="image/*" multiple hidden onChange={handlePhotoChange} />
        </div>
      )}
    </div>
  );
}
