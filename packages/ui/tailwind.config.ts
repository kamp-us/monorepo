import { type Config } from "tailwindcss";

import { kampusPreset } from "@kampus/tailwind";

export default {
  presets: [kampusPreset],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
} satisfies Config;
