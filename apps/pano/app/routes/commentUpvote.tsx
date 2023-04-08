import type { ActionFunction } from "@remix-run/node";
import invariant from "tiny-invariant";
import { requireUser } from "~/authenticator.server";
import { createUpvote, deleteUpvote } from "~/models/comment.server";
import {
  createNotification,
  deleteNotifications,
} from "~/models/notification.server";

export const action: ActionFunction = async ({ request }) => {
  await requireUser(request)
  const formData = await request.formData();
  const jsonData = formData.get("json") as string | null;

  invariant(jsonData, "json is required");

  let { type, input } = JSON.parse(jsonData);

  switch (type) {
    case "create":
      try {
        await createUpvote(input.commentID, input.userID);
        await createNotification(
          "UPVOTECOMMENT",
          input.userID,
          null,
          input.commentID
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
        await deleteUpvote(input.commentID, input.userID);
        await deleteNotifications(
          "UPVOTE_REMOVED_ON_COMMENT",
          input.userID,
          input.commentID
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
