import { type Clients } from "~/clients";
import { createPanoLoaders } from "./pano";
import { createSozlukLoaders } from "./sozluk";
import { createUserLoader } from "./user";

export type DataLoaders = ReturnType<typeof createLoaders>;

export const createLoaders = (clients: Clients) => {
  return {
    user: createUserLoader(clients),
    sozluk: createSozlukLoaders(clients),
    pano: createPanoLoaders(clients),
  };
};
