"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "auburn-garden-shopping:v1";

function readStore(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeStore(store: Record<string, boolean>) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  window.dispatchEvent(new CustomEvent("shopping-checklist-updated"));
}

export function useShoppingChecklist() {
  const [store, setStore] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setStore(readStore());
    const handler = () => setStore(readStore());
    window.addEventListener("shopping-checklist-updated", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("shopping-checklist-updated", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const toggle = useCallback((key: string) => {
    const current = readStore();
    const next = { ...current, [key]: !current[key] };
    writeStore(next);
    setStore(next);
  }, []);

  return { store, toggle };
}
