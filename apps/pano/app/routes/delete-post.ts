import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { deletePost } from "~/models/post.server";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const jsonData = formData.get("json");

  invariant(jsonData, "json is required");
  let variables = JSON.parse(jsonData?.toString());

  const postID = variables.id ? variables.id : null;
  invariant(postID, "postID is required");

  try {
    await deletePost(postID);
    return redirect("/");
  } catch (e) {
    return json(e, { status: 500 });
  }
};
