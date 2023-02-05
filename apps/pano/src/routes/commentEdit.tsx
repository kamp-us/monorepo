import type { ActionFunction } from "@remix-run/node";
import invariant from "tiny-invariant";
import { editComment, getCommentByID } from "~/models/comment.server";
import { requireUser } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const id = formData.get("id")?.toString();
  invariant(id, "comment id is required");

  const content = formData.get("content")?.toString();
  invariant(content, "comment content is required");

  const user = await requireUser(request);

  const comment = await getCommentByID(id);
  invariant(
    comment?.userID && user.id === comment.userID,
    "Who are you? Git burdan!"
  );

  try {
    await editComment(id, content);
  } catch (e) {
    return {
      status: 500,
      body: e,
    };
  }

  return {
    status: 200,
    body: JSON.stringify({
      success: true,
    }),
  };
};
