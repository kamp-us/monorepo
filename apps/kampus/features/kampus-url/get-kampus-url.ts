import { assertNever } from "@kampus/std";

import { env } from "~/env";

type KampusProduct = "sozluk" | "pano" | "pasaport";

export const getKampusURL = (product: KampusProduct, path: string = "") => {
  switch (env.KAMPUS_ENV) {
    case "localhost":
      return `http://${product}.localhost.kamp.us:3000`;
    case "preview":
    case "development":
      return `https://${product}.dev.kamp.us`;
    case "production":
      return `https://${product}.kamp.us`;
    default:
      assertNever(env.KAMPUS_ENV);
  }
};
