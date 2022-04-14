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
import { useAmplifyQuery } from "../features/utils/amplify/useQuery";
import { useAmplifyMutation } from "../features/utils/amplify/useMutation";
import { useUserContext } from "../features/auth/user-context";
import { PostItem } from "../features/post/PostItem";
import { Button } from "../ui-library/layout-components/Button";
import { Textarea } from "../ui-library/Textarea";
import { Box } from "../ui-library/layout-components/Box";

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
  const { mutationFn: mutateComment } = useAmplifyMutation<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >(createComment);
  const user = useUserContext();

  const { data, loading, refetch } = useAmplifyQuery<
    GetPostQuery,
    GetPostQueryVariables
  >(getPost, { id: id as string }, { skip: !id });

  if (loading) {
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
        input: {
          content: comment,
          owner: user.username,
          postID: id,
        },
      });
      refetch();
    } catch (e) {
      console.log("error adding comment", e);
    }
  };

  const visualTree = toVisualTree(sortedComments);

  return (
    <CenteredContainer css={{ gap: 5 }}>
      <PostItem post={post} />
      <Textarea rows={4} onChange={(event) => setComment(event.target.value)} />
      <Box css={{ paddingBottom: 10 }}>
        <Button onClick={addComment}>Cevap yaz</Button>
      </Box>
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
