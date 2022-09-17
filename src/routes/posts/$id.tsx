import { PlusIcon } from "@radix-ui/react-icons";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import invariant from "tiny-invariant";
import { useUserContext } from "~/features/auth/user-context";
import { CommentItem } from "~/features/comment/Comment";
import { PostItem } from "~/features/post/PostItem";
import { createComment } from "~/models/comment.server";
import type { Comment } from "~/models/comment.server";
import { getPostById } from "~/models/post.server";
import type { Post } from "~/models/post.server";
import { requireUserId } from "~/session.server";
import { Form } from "~/ui-library/Form";
import { Text } from "~/ui-library/Text";
import { Textarea } from "~/ui-library/Textarea";
import { Box } from "~/ui-library/layout-components/Box";
import { Button } from "~/ui-library/layout-components/Button";
import { CenteredContainer } from "~/ui-library/layout-components/CenteredContainer";

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
  if (!params.id) return null;
  const post = await getPostById(params.id);
  return json({ post });
};

type LoaderData = {
  post: Post;
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const content = formData.get("content");

  invariant(content, "content is required");
  invariant(params.id, "postID is required");

  const commentID = formData.get("commentID")?.toString();
  const userID = await requireUserId(request);

  try {
    await createComment(content.toString(), params.id, userID, commentID);

    return null;
  } catch {
    return json(null, { status: 500 });
  }
};

const SinglePost = () => {
  const user = useUserContext();
  const { post } = useLoaderData<LoaderData>();

  const [comment, setComment] = useState("");

  const visualTree = toVisualTree(post.comments);

  const postComments = Object.values(visualTree).filter(({ comment }) => {
    return !comment.parentID;
  });

  return (
    <CenteredContainer css={{ gap: 5 }}>
      <PostItem post={post} />
      <Form method="post" css={{ display: "flex", flexDirection: "column" }}>
        <Textarea
          css={{
            width: "auto",
            cursor: user ? "text" : "not-allowed",
            resize: user ? "both" : "noe",
          }}
          name="content"
          disabled={!user}
          rows={4}
          onChange={(event) => setComment(event.target.value)}
          value={user ? comment : "Yorum yazmak için giriş yapmış olmalısın."}
        />
        <Box css={{ padding: "$1 0 $2" }}>
          <Button
            disabled={!user}
            size="2"
            css={{
              cursor: user ? "pointer" : "not-allowed",
            }}
            type="submit"
          >
            <Box css={{ mr: "$1", display: "flex", alignItems: "center" }}>
              <PlusIcon />
            </Box>
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
