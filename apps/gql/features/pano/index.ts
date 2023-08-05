import { createPanoCommentActions } from "~/features/pano/comment";
import { createPanoPostActions } from "~/features/pano/post";
import { type Clients } from "~/clients";

export function createPanoActions(clients: Clients) {
  return {
    post: createPanoPostActions(clients),
    comment: createPanoCommentActions(clients),
  };
}
