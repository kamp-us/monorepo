/** Env variables gets validated on build */
import "./env.mjs";

/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: ["@kampus/sozluk-content"],
};

export default config;
