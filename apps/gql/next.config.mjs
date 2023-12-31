/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: [
    '@kampus/sozluk-content',
    '@kampus/odin-content',
    '@kampus-content/odin',
  ],
}

export default config;
