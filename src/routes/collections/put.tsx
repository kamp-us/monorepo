import { ActionFunction, json } from "@remix-run/node";
import { AuthUser } from "~/features/auth/user-context";
import { fetchUser } from "~/features/auth/useFetchUser";
import { createClient } from "~/graphql/apollo-client";
import { gql } from "@apollo/client";
import {
  createCollectionPosts,
  deleteCollectionPosts,
} from "~/graphql/mutations";
import { withSSR } from "~/features/utils/amplify/withSSR";

export const action: ActionFunction = async ({ request }) => {
  const SSR = withSSR({ request });
  const formData = await request.formData();
  const postID = formData.get("postID");
  const collectionID = formData.get("collectionID");
  const collectionPostsID = formData.get("collectionPostsID");
  const client = await createClient();

  let user: AuthUser | null = null;
  try {
    user = await fetchUser(SSR.Auth);
  } catch {
    user = null;
  }

  if (collectionPostsID) {
    const { errors } = await client.mutate({
      mutation: gql(deleteCollectionPosts),
      variables: {
        input: {
          id: collectionPostsID,
        },
      },
    });

    if (errors) {
      console.log("index route", errors);
      return { post: null, collections: null, errors };
    }

    return null;
  }

  const { data, errors } = await client.mutate({
    mutation: gql(createCollectionPosts),
    variables: {
      input: {
        collectionID,
        postID,
      },
    },
  });

  if (errors) {
    return { post: null, collections: null, errors };
  }

  return json({ collectionPostsID: data.createCollectionPosts.id });
};
