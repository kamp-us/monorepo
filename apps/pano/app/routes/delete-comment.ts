import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import invariant from "tiny-invariant";
import { deleteComment } from "~/models/comment.server";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const jsonData = formData.get("json");

  invariant(jsonData, "json is required");
  let variables = JSON.parse(jsonData?.toString());

  const commentID = variables.id ? variables.id : null;
  invariant(commentID, "commentID is required");

  try {
    await deleteComment(commentID);
    return json({ status: 200 });
  } catch (e) {
    return json(e, { status: 500 });
  }
};
