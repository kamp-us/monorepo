/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@kampus/tailwind", "@kampus/ui-next"],

  compiler: {
    relay: {
      src: "./",
      language: "typescript",
    },
  },

  rewrites() {
    return {
      beforeFiles: [
        // if the host is `pano.*`,
        // this rewrite will be applied
        {
          source: "/:path((?!_next/|_static/|[\\w-]+\\.\\w+).*)",
          has: [
            {
              type: "host",
              value: "pano.(.*)",
            },
          ],
          destination: "/pano/:path",
        },
        // if the host is `sozluk.*`,
        // this rewrite will be applied
        {
          source: "/:path((?!_next/|_static/|[\\w-]+\\.\\w+).*)",
          has: [
            {
              type: "host",
              value: "sozluk.(.*)",
            },
          ],
          destination: "/sozluk/:path",
        },
      ],
    };
  },
};

export default config;
