import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import invariant from "tiny-invariant";
import { withSSR } from "~/features/utils/amplify/withSSR";
import { deletePost } from "~/graphql/mutations";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const jsonData = formData.get("json");

  invariant(jsonData, "json is required");

  const { graphql } = withSSR({ request });

  let variables = JSON.parse(jsonData?.toString());

  try {
    await graphql({ query: deletePost, variables });
    return json("success", { status: 200 });
  } catch (e) {
    return json(e, { status: 500 });
  }
};
