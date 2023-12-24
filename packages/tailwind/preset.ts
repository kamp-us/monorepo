import typographyPlugin from "@tailwindcss/typography";
import { type Config } from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import animatePlugin from "tailwindcss-animate";

import { kampusPlugin } from "./plugin";

export const kampusPreset = {
  darkMode: ["class"],
  content: [],
  plugins: [animatePlugin, typographyPlugin, kampusPlugin],
} satisfies Config;
