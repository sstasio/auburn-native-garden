"use client";

import { Printer } from "lucide-react";

export function PrintButton({ label = "Print this page" }: { label?: string }) {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full border border-sage-dark/40 px-4 py-2 text-sm font-semibold text-sage-dark transition-colors hover:bg-sage-dark/10 print:hidden"
    >
      <Printer className="h-4 w-4" />
      {label}
    </button>
  );
}
