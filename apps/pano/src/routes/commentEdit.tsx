import type { ActionFunction } from "@remix-run/node";
import invariant from "tiny-invariant";
import { editComment } from "~/models/comment.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const jsonData = formData.get("json") as string | null;

  invariant(jsonData, "Missing json data");

  const { commentID, commentContent } = JSON.parse(jsonData);

  console.log(commentID, commentContent);

  try {
    await editComment(commentID, commentContent);
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
