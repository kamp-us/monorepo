import { createPanoActions } from "~/features/pano";
import { type Clients } from "./clients";

export type DataActions = ReturnType<typeof createActions>;

export function createActions(clients: Clients) {
  return {
    pano: createPanoActions(clients),
  };
}
