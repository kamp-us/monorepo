import {
  Collection,
  Comment,
  GetPostQuery,
  GetPostQueryVariables,
  ListCollectionsQuery,
  ListCollectionsQueryVariables,
  Post,
} from "~/API";
import { useState } from "react";
import { getPost, listCollections } from "~/graphql/queries";
import { CenteredContainer } from "~/ui-library/layout-components/CenteredContainer";
import { CommentItem } from "~/features/comment/Comment";
import { AuthUser, useUserContext } from "~/features/auth/user-context";
import { PostItem } from "~/features/post/PostItem";
import { Button } from "~/ui-library/layout-components/Button";
import { Textarea } from "~/ui-library/Textarea";
import { Box } from "~/ui-library/layout-components/Box";
import { gql } from "@apollo/client";
import { Text } from "~/ui-library/Text";
import { ActionFunction, LoaderFunction, useLoaderData } from "remix";
import { createClient } from "~/graphql/apollo-client";
import { createComment } from "~/graphql/mutations";
import { fetchUser } from "~/features/auth/useFetchUser";
import { Auth } from "aws-amplify";
import { Form } from "~/ui-library/Form";

interface VisualTree {
  [key: string]: {
    comment: Comment;
    comments: Comment[];
  };
}

const toVisualTree = (comments: Comment[]) => {
  const tree: VisualTree = {};
  comments.forEach((comment) => {
    if (!tree[comment.id]) {
      tree[comment.id] = { comment, comments: [] };
    }
  });
  comments.forEach((comment) => {
    if (comment.parentID) {
      const parent = tree[comment.parentID];
      if (parent) {
        parent.comments.push(comment);
      }
    }
  });
  return tree;
};

export const loader: LoaderFunction = async ({ params }) => {
  const client = await createClient();
  let user: AuthUser | null;
  try {
    user = await fetchUser(Auth);
  } catch {
    user = null;
  }

  if (!params.id) return null;

  const { data: post, error } = await client.query<
    GetPostQuery,
    GetPostQueryVariables
  >({
    query: gql(getPost),
    variables: { id: params.id },
  });

  if (error) {
    throw error;
  }

  const { data: collections, error: collectionsError } = await client.query<
    ListCollectionsQuery,
    ListCollectionsQueryVariables
  >({
    query: gql(listCollections),
    variables: {
      filter: {
        owner: {
          eq: user?.username,
        },
      },
    },
  });

  if (collectionsError) {
    console.log("index route", collectionsError);
    return { post, collections: null, collectionsError };
  }

  return { post, collections };
};

type LoaderData = {
  post: GetPostQuery;
  collections: ListCollectionsQuery;
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const content = formData.get("content");
  const commentID = formData.get("commentID");

  const client = await createClient();

  let user: AuthUser | null = null;
  try {
    user = await fetchUser(Auth);
  } catch {
    user = null;
  }

  const variables = commentID
    ? {
        postID: params.id,
        content,
        owner: user?.username,
        parentID: commentID,
      }
    : {
        postID: params.id,
        content,
        owner: user?.username,
      };

  const { data } = await client.mutate({
    mutation: gql(createComment),
    variables: { input: variables },
  });

  return { data };
};

const SinglePost = () => {
  const user = useUserContext();
  const { post: postData, collections: collectionsData } =
    useLoaderData<LoaderData>();

  const [comment, setComment] = useState("");

  const post = postData.getPost as Post;
  const sortedComments = [...(post.comments?.items as Comment[])].sort((a, b) =>
    a.createdAt > b.createdAt ? 1 : -1
  );

  const collections = collectionsData?.listCollections?.items as Collection[];

  const visualTree = toVisualTree(sortedComments);

  const postComments = Object.values(visualTree).filter(({ comment }) => {
    return !comment.parentID;
  });

  console.log(post);

  return (
    <CenteredContainer css={{ gap: 5 }}>
      <PostItem post={post} collections={collections} />
      <Form method="post" css={{ width: "100%" }}>
        <Textarea
          css={{
            width: "100%",
            cursor: user ? "pointer" : "not-allowed",
          }}
          name="content"
          disabled={!user}
          rows={4}
          onChange={(event) => setComment(event.target.value)}
          value={user ? comment : "Yorum yazmak için giriş yapmış olmalısın."}
        />
        <Box css={{ padding: "5px 0 10px" }}>
          <Button
            disabled={!user}
            css={{
              cursor: user ? "pointer" : "not-allowed",
            }}
            type="submit"
          >
            Cevap yaz
          </Button>
        </Box>
      </Form>
      {postComments.length > 0 && (
        <>
          <Text
            size={5}
            css={{ fontWeight: 500, color: "$gray11", lineHeight: 1.5 }}
          >
            Yorumlar
          </Text>
          {postComments.map(({ comment, comments }) => {
            return (
              <CommentItem
                key={comment.id}
                comment={comment}
                comments={comments}
                postID={post?.id as string}
                username={user?.username as string}
                allComments={visualTree}
              />
            );
          })}
        </>
      )}
    </CenteredContainer>
  );
};

export default SinglePost;
