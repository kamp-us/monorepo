import {
  Comment,
  CreateCommentMutation,
  CreateCommentMutationVariables,
  GetPostQuery,
  GetPostQueryVariables,
  Post,
} from "../API";
import React, { FC, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPost } from "../graphql/queries";
import { CenteredContainer } from "../ui-library/layout-components/CenteredContainer";
import { createComment } from "../graphql/mutations";
import { CommentItem } from "../features/comment/Comment";
import { useAmplifyQuery } from "../features/utils/amplify/useQuery";
import { useAmplifyMutation } from "../features/utils/amplify/useMutation";
import { useUserContext } from "../features/auth/user-context";

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
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const { mutationFn: mutateComment } = useAmplifyMutation<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >(createComment);
  const user = useUserContext();

  const { data, loading, refetch } = useAmplifyQuery<
    GetPostQuery,
    GetPostQueryVariables
  >(getPost, {
    id: id as string,
  });

  if (loading) return <CenteredContainer>Loading...</CenteredContainer>;

  const post = data?.getPost as Post;
  const sortedComments = [...(post.comments?.items as Comment[])].sort((a, b) =>
    a.createdAt > b.createdAt ? 1 : -1
  );

  const addComment = async () => {
    try {
      if (!comment) return;

      await mutateComment({
        input: {
          content: comment,
          owner: user?.username as string,
          postID: id as string,
        },
      });
      refetch();
    } catch (e) {
      console.log("error adding comment", e);
    }
  };

  const visualTree = toVisualTree(sortedComments);

  return (
    <CenteredContainer>
      <Link to="/">Home</Link>
      <br />
      <p>{post?.url}</p>
      <p>{post?.title}</p>
      <textarea onChange={(event) => setComment(event.target.value)} />
      <button onClick={addComment}>add comment</button>
      {Object.values(visualTree).map(({ comment, comments }) => {
        return (
          <>
            {!comment.parentID && (
              <CommentItem
                key={comment.id}
                comment={comment}
                comments={comments}
                postID={post?.id as string}
                username={user?.username as string}
                allComments={visualTree}
                refetch={refetch}
              />
            )}
          </>
        );
      })}
    </CenteredContainer>
  );
};
