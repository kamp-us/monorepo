import { type Config } from "tailwindcss";

import { kampusPreset } from "@kampus/tailwind";

export default {
  presets: [kampusPreset],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/tailwind/**/*.{js,ts}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
} satisfies Config;
