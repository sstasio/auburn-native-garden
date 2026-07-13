import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      colors: {
        parchment: "#f4ecdd",
        parchmentDark: "#e9dcc3",
        ink: "#2f2a20",
        sage: {
          DEFAULT: "#5c6b47",
          light: "#8a9a5b",
          dark: "#3f4b3a",
        },
        terracotta: {
          DEFAULT: "#c1552c",
          light: "#d9754f",
        },
        clay: "#a9906f",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
