import { type Config } from "tailwindcss";

import { kampusPreset } from "@kampus/tailwind";

export default {
  presets: [kampusPreset],
  content: [
    "./stories/**/*.{js,jsx,ts,tsx}",
    "../../packages/tailwind/**/*.{js,ts}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
} satisfies Config;
