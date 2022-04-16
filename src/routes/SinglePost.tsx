import {
  Comment,
  CreateCommentMutation,
  CreateCommentMutationVariables,
  GetPostQuery,
  GetPostQueryVariables,
  Post,
} from "../API";
import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../graphql/queries";
import { CenteredContainer } from "../ui-library/layout-components/CenteredContainer";
import { createComment } from "../graphql/mutations";
import { CommentItem } from "../features/comment/Comment";
import { useUserContext } from "../features/auth/user-context";
import { PostItem } from "../features/post/PostItem";
import { Button } from "../ui-library/layout-components/Button";
import { Textarea } from "../ui-library/Textarea";
import { Box } from "../ui-library/layout-components/Box";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Text } from "../ui-library/Text";

type PostProps = {};

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

export const SinglePost: FC<PostProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [comment, setComment] = useState("");
  const user = useUserContext();

  const [mutateComment] = useMutation<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >(gql(createComment));

  const { data, refetch } = useQuery<GetPostQuery, GetPostQueryVariables>(
    gql(getPost),
    { variables: { id: id as string }, skip: !id }
  );

  if (!data) {
    return null;
  }

  const post = data?.getPost as Post;
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

      await mutateComment({
        variables: {
          input: {
            content: comment,
            owner: user.username,
            postID: id,
          },
        },
      });
      refetch();
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
      <PostItem post={post} onUpvoteSuccess={refetch} />
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
                refetch={refetch}
              />
            );
          })}
        </>
      )}
    </CenteredContainer>
  );
};
