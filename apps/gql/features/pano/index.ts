import { createPanoCommentActions } from "~/features/pano/comment";
import { createPanoPostActions } from "~/features/pano/post";
import { type Clients } from "~/clients";
import { createPostUpvoteActions } from "./postUpvote";

export function createPanoActions(clients: Clients) {
  return {
    post: createPanoPostActions(clients),
    comment: createPanoCommentActions(clients),
    postUpvote: createPostUpvoteActions(clients),
  };
}
