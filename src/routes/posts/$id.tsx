import type { Comment, GetPostQuery, GetPostQueryVariables, Post } from "~/API";
import { useState } from "react";
import { getPost } from "~/graphql/queries";
import { CenteredContainer } from "~/ui-library/layout-components/CenteredContainer";
import { CommentItem } from "~/features/comment/Comment";
import type { AuthUser} from "~/features/auth/user-context";
import { useUserContext } from "~/features/auth/user-context";
import { PostItem } from "~/features/post/PostItem";
import { Button } from "~/ui-library/layout-components/Button";
import { Textarea } from "~/ui-library/Textarea";
import { Box } from "~/ui-library/layout-components/Box";
import { Text } from "~/ui-library/Text";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createComment } from "~/graphql/mutations";
import { fetchUser } from "~/features/auth/useFetchUser";
import { Form } from "~/ui-library/Form";
import { withSSR } from "~/features/utils/amplify/withSSR";
import { PlusIcon } from "@radix-ui/react-icons";

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

export const loader: LoaderFunction = async ({ params, request }) => {
  const { graphql } = withSSR({ request });

  if (!params.id) return null;

  const data = await graphql<GetPostQueryVariables>({
    query: getPost,
    variables: { id: params.id },
  });

  return json({ data });
};

type LoaderData = {
  data: GetPostQuery;
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const content = formData.get("content");
  const commentID = formData.get("commentID");

  const { Auth, graphql } = withSSR({ request });

  let user: AuthUser;
  try {
    user = await fetchUser(Auth);
  } catch {
    return json(null, { status: 500 });
  }

  const input = commentID
    ? {
        postID: params.id,
        content,
        owner: user.username,
        parentID: commentID,
      }
    : {
        postID: params.id,
        content,
        owner: user.username,
      };

  await graphql({
    query: createComment,
    variables: { input },
  });

  return null;
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
