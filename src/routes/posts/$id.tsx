import { Comment, GetPostQuery, GetPostQueryVariables, Post } from "~/API";
import { useState } from "react";
import { getPost } from "~/graphql/queries";
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

  if (!params.id) return null;

  const { data, error } = await client.query<
    GetPostQuery,
    GetPostQueryVariables
  >({
    query: gql(getPost),
    variables: { id: params.id },
  });

  if (error) {
    throw error;
  }

  return { data };
};

type LoaderData = {
  data: GetPostQuery;
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
  const { data } = useLoaderData<LoaderData>();

  const [comment, setComment] = useState("");

  const post = data.getPost as Post;
  const sortedComments = [...(post.comments?.items as Comment[])].sort((a, b) =>
    a.createdAt > b.createdAt ? 1 : -1
  );

  const visualTree = toVisualTree(sortedComments);

  const postComments = Object.values(visualTree).filter(({ comment }) => {
    return !comment.parentID;
  });

  return (
    <CenteredContainer css={{ gap: 5 }}>
      <PostItem post={post} />
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
