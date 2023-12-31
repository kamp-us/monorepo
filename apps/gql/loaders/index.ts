import { type Clients } from "~/clients";
import { createOdinLoaders } from "~/loaders/odin";
import { createPanoLoaders } from "./pano";
import { createRafineLoaders } from "./rafine";
import { createSozlukLoaders } from "./sozluk";
import { createUserLoaders } from "./user";

export type DataLoaders = ReturnType<typeof createLoaders>;

export const createLoaders = (clients: Clients) => {
  return {
    user: createUserLoaders(clients),
    sozluk: createSozlukLoaders(),
    pano: createPanoLoaders(clients),
    odin: createOdinLoaders(),
    rafine: createRafineLoaders(),
  };
};
