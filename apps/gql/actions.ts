import { type Clients } from "./clients";
import { createPanoActions } from "./features/pano/post";

export type DataActions = ReturnType<typeof createActions>;

export function createActions(clients: Clients) {
  return {
    pano: createPanoActions(clients),
  };
}
