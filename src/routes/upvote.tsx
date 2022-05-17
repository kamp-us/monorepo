import { ActionFunction } from "remix";
import invariant from "tiny-invariant";
import { createUpvote, deleteUpvote } from "~/graphql/mutations";
import { json } from "@remix-run/node";
import { withSSR } from "~/features/utils/amplify/withSSR";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const jsonData = formData.get("json") as string | null;
  invariant(jsonData, "json is required");
  const { graphql } = withSSR({ request });

  let { type, ...variables } = JSON.parse(jsonData);

  switch (type) {
    case "create":
      try {
        await graphql({ query: createUpvote, variables });
      } catch (e) {
        console.error(e);
        return { status: 500, error: e };
      }
      break;
    case "delete":
      try {
        await graphql({ query: deleteUpvote, variables });
      } catch (e) {
        console.error(e);
        return { status: 500, error: e };
      }
    default:
      return { status: 400, error: "type is required" };
  }

  return json({ status: 200 });
};
