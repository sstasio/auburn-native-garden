"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/fence-line", label: "Fence Line" },
  { href: "/containers", label: "Containers" },
  { href: "/plants", label: "Plant Directory" },
  { href: "/log", label: "Garden Log" },
];

export function SiteNav() {
  const pathname = usePathname();
  return (
    <header className="relative z-10 border-b border-clay/30 bg-parchment/90 backdrop-blur-sm sticky top-0">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight text-sage-dark">
          Auburn Native Garden
        </Link>
        <nav className="flex flex-wrap gap-1 sm:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm font-medium transition-colors sm:px-4",
                pathname === item.href
                  ? "bg-sage-dark text-parchment"
                  : "text-ink/70 hover:bg-clay/20 hover:text-ink"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
