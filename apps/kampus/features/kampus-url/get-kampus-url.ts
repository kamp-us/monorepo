import { assertNever } from "@kampus/std";

import { env } from "~/env";

type KampusProduct = "sozluk" | "pano" | "pasaport";

export const getKampusURL = (product: KampusProduct, path: string = "") => {
  switch (env.KAMPUS_ENV) {
    case "localhost":
      return `http://${product}.localhost.kamp.us:3000${path}`;
    case "preview":
    case "development":
      return `https://${product}.dev.kamp.us${path}`;
    case "production":
      return `https://${product}.kamp.us${path}`;
    default:
      return assertNever(env.KAMPUS_ENV);
  }
};
