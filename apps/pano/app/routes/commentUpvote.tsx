import { ActionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { createUpvote, deleteUpvote } from "~/models/comment.server";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const jsonData = formData.get("json") as string | null;

  invariant(jsonData, "json is required");

  let { type, input } = JSON.parse(jsonData);

  switch (type) {
    case "create":
      try {
        await createUpvote(input.commentID, input.userID);
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
