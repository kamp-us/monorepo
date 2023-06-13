/* eslint-disable @typescript-eslint/no-var-requires */
const kampusConfig = require("@kampus/tailwind-config").default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...kampusConfig,
  content: [
    "./stories/**/*.{js,jsx,ts,tsx}",
    "../../packages/tailwind-config/**/*.{js,ts}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
};
