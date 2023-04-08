import type { ActionFunction } from "@remix-run/node";
import invariant from "tiny-invariant";
import { requireUser } from "~/authenticator.server";
import {
  createNotification,
  deleteNotifications,
} from "~/models/notification.server";
import { createUpvote, deleteUpvote } from "~/models/post.server";

export const action: ActionFunction = async ({ request }) => {
  await requireUser(request)
  const formData = await request.formData();
  const jsonData = formData.get("json") as string | null;

  invariant(jsonData, "json is required");

  let { type, input } = JSON.parse(jsonData);

  switch (type) {
    case "create":
      try {
        await createUpvote(input.postID, input.userID);
        await createNotification(
          "UPVOTEPOST",
          input.userID,
          input.postID,
          null
        );
      } catch (e) {
        return {
          status: 500,
          body: e,
        };
      }
      break;
    case "delete":
      try {
        await deleteUpvote(input.postID, input.userID);
        await deleteNotifications(
          "UPVOTE_REMOVED_ON_POST",
          input.userID,
          input.postID
        );
      } catch (e) {
        return {
          status: 500,
          body: e,
        };
      }
      break;
    default:
      throw new Error("Unknown mutation type");
  }

  return {
    status: 200,
    body: JSON.stringify({
      success: true,
    }),
  };
};
