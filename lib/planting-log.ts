"use client";

import { useCallback, useEffect, useState } from "react";

export type PlantStatus = "Not Planted" | "Planted" | "Established" | "Struggling" | "Removed";

export interface LogEntry {
  status: PlantStatus;
  plantedOn?: string; // ISO date string
  photos: string[]; // data URLs, resized client-side
  note?: string;
  updatedAt: string;
}

export type LogStore = Record<string, LogEntry>;

const STORAGE_KEY = "auburn-garden-log:v1";

function readStore(): LogStore {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as LogStore) : {};
  } catch {
    return {};
  }
}

function writeStore(store: LogStore) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  window.dispatchEvent(new CustomEvent("garden-log-updated"));
}

export const defaultEntry: LogEntry = {
  status: "Not Planted",
  photos: [],
  updatedAt: new Date().toISOString(),
};

export function useGardenLog() {
  const [store, setStore] = useState<LogStore>({});

  useEffect(() => {
    setStore(readStore());
    const handler = () => setStore(readStore());
    window.addEventListener("garden-log-updated", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("garden-log-updated", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const getEntry = useCallback((slug: string): LogEntry => {
    return readStore()[slug] ?? defaultEntry;
  }, []);

  const saveEntry = useCallback((slug: string, entry: Partial<LogEntry>) => {
    const current = readStore();
    const merged: LogEntry = {
      ...defaultEntry,
      ...current[slug],
      ...entry,
      updatedAt: new Date().toISOString(),
    };
    const next = { ...current, [slug]: merged };
    writeStore(next);
    setStore(next);
  }, []);

  return { store, getEntry, saveEntry };
}

export async function fileToResizedDataUrl(file: File, maxDim = 640): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("no canvas context"));
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

export const statusStyles: Record<PlantStatus, { bg: string; text: string }> = {
  "Not Planted": { bg: "#e5ded0", text: "#5c5443" },
  Planted: { bg: "#dbe6c9", text: "#3f4b3a" },
  Established: { bg: "#c7dab0", text: "#3f4b3a" },
  Struggling: { bg: "#f3d6a8", text: "#8a5a1e" },
  Removed: { bg: "#e6c4bd", text: "#8a3a2e" },
};
