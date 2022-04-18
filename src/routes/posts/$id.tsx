import { Comment, GetPostQuery, GetPostQueryVariables, Post } from "~/API";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "~/graphql/queries";
import { CenteredContainer } from "~/ui-library/layout-components/CenteredContainer";
import { CommentItem } from "~/features/comment/Comment";
import { useUserContext } from "~/features/auth/user-context";
import { PostItem } from "~/features/post/PostItem";
import { Button } from "~/ui-library/layout-components/Button";
import { Textarea } from "~/ui-library/Textarea";
import { Box } from "~/ui-library/layout-components/Box";
import { gql } from "@apollo/client";
import { Text } from "~/ui-library/Text";
import { LoaderFunction, useLoaderData } from "remix";
import { createClient } from "~/graphql/apollo-client";

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

const SinglePost = () => {
  const { id } = useParams<{ id: string }>();
  const user = useUserContext();
  const { data } = useLoaderData<LoaderData>();

  const [comment, setComment] = useState("");
  // const [mutateComment] = useMutation<
  //   CreateCommentMutation,
  //   CreateCommentMutationVariables
  // >(gql(createComment));
  //

  const post = data.getPost as Post;
  const sortedComments = [...(post.comments?.items as Comment[])].sort((a, b) =>
    a.createdAt > b.createdAt ? 1 : -1
  );

  const addComment = async () => {
    try {
      if (!comment) return;

      if (!user?.username) {
        return;
      }

      if (!id) {
        return;
      }

      // await mutateComment({
      //   variables: {
      //     input: {
      //       content: comment,
      //       owner: user.username,
      //       postID: id,
      //     },
      //   },
      // });
      // refetch();
    } catch (e) {
      console.log("error adding comment", e);
    }
  };

  const visualTree = toVisualTree(sortedComments);

  const postComments = Object.values(visualTree).filter(({ comment }) => {
    return !comment.parentID;
  });

  return (
    <CenteredContainer css={{ gap: 5 }}>
      <PostItem post={post} onUpvoteSuccess={() => {}} />
      <Textarea
        css={{
          cursor: user ? "pointer" : "not-allowed",
        }}
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
          onClick={addComment}
        >
          Cevap yaz
        </Button>
      </Box>
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
                refetch={() => {}}
              />
            );
          })}
        </>
      )}
    </CenteredContainer>
  );
};

export default SinglePost;
