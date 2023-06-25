/* eslint-disable @typescript-eslint/no-var-requires */
const kampusConfig = require("@kampus/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...kampusConfig,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/tailwind-config/**/*.{js,ts}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
};
