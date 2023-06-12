/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: ["@kampus/tailwind-config", "@kampus/ui-next"],
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
