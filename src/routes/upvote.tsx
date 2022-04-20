import { ActionFunction } from "remix";
import { createClient } from "~/graphql/apollo-client";
import invariant from "tiny-invariant";
import { gql } from "@apollo/client";
import { createUpvote, deleteUpvote } from "~/graphql/mutations";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const jsonData = formData.get("json") as string | null;
  const client = await createClient();
  invariant(jsonData, "json is required");

  let { type, ...variables } = JSON.parse(jsonData);

  switch (type) {
    case "create":
      try {
        await client.mutate({
          mutation: gql(createUpvote),
          variables,
        });
      } catch (e) {
        return {
          status: 500,
          body: e,
        };
      }
      break;
    case "delete":
      try {
        await client.mutate({
          mutation: gql(deleteUpvote),
          variables,
        });
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
