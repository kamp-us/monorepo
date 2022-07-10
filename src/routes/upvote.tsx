import type { ActionFunction } from "@remix-run/node";
import invariant from "tiny-invariant";
import { createUpvote, deleteUpvote } from "~/graphql/mutations";
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
        return {
          status: 500,
          body: e,
        };
      }
      break;
    case "delete":
      try {
        await graphql({ query: deleteUpvote, variables });
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
