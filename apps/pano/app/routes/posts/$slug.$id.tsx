import {
  Box,
  Button,
  CenteredContainer,
  Form,
  GappedBox,
  Separator,
  Text,
  Textarea,
  ValidationMessage,
} from "@kampus/ui";
import { PlusIcon } from "@radix-ui/react-icons";
import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  useActionData,
  useLoaderData,
  useLocation,
  useTransition,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import { z } from "zod";
import { requireUser } from "~/authenticator.server";
import { useUserContext } from "~/features/auth/user-context";
import { CommentItem } from "~/features/comment/Comment";
import { PostItem } from "~/features/post/PostItem";
import type { Comment } from "~/models/comment.server";
import { createComment } from "~/models/comment.server";
import type { Post } from "~/models/post.server";
import { getPostBySlugAndId } from "~/models/post.server";

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
  if (typeof params.slug !== "string" || typeof params.id !== "string") {
    return json({ data: null }, { status: 404 });
  }

  const post = await getPostBySlugAndId(params.slug, params.id);
  return json({ post });
};

export const meta: MetaFunction = ({
  data,
}: {
  data: LoaderData | undefined;
}) => {
  if (!data) {
    return {
      title: "No post",
    };
  }
  return {
    title: data.post.title,
    author: data.post.owner.username,
    description: `${data.post._count.comments} yorum`,
    "twitter:title": data.post.title,
    "twitter:description": `${data.post._count.comments} yorum`,
    "twitter:card": "summary",
    "og:title": data.post.title,
    "og:description": `${data.post._count.comments} yorum`,
    "og:type": "article",
  };
};

type LoaderData = {
  post: Post;
};

type ActionData = {
  error: {
    [x: string]: { message: string; id: string } | null;
  };
};

const errorMessage = (
  type: "comment" | "post" | "params",
  message: string,
  id: string
) => {
  return json<ActionData>(
    {
      error: {
        [type]: { message, id },
      },
    },
    {
      status: 400,
    }
  );
};

const CommentSchema = z.object({
  content: z.string().min(1),
  commentID: z.string().optional(),
});

type CommentFields = z.infer<typeof CommentSchema>;

const ParamsSchema = z.object({
  slug: z.string().min(1, "Slug is required"),
  id: z.string().min(1, "Id is required"),
});

export const action: ActionFunction = async ({ request, params }) => {
  const user = await requireUser(request);
  const formData = await request.formData();
  const fields = Object.fromEntries(formData.entries()) as CommentFields;
  const paramsField = ParamsSchema.parse(params);
  const result = CommentSchema.safeParse(fields);
  const paramsResult = ParamsSchema.safeParse(params);

  if (!paramsResult.success) {
    return errorMessage("params", paramsResult.error.message, paramsField.id);
  }

  if (!result.success) {
    if (fields.commentID) {
      return errorMessage(
        "comment",
        "Cevap kısmı boş bırakılamaz.",
        fields.commentID
      );
    } else {
      return errorMessage("post", "Yorum boş gönderilemez.", paramsField.id);
    }
  }

  try {
    await createComment(
      fields.content,
      paramsField.id,
      user.id,
      fields.commentID
    );
    return null;
  } catch {
    return json<ActionData>(
      { error: { comment: null, post: null } },
      { status: 500 }
    );
  }
};

const SinglePost = () => {
  const user = useUserContext();
  const { post } = useLoaderData<LoaderData>();
  const location = useLocation();
  const expanded = !!location.hash;

  const [comment, setComment] = useState("");
  const transition = useTransition();
  const actionData = useActionData<ActionData>();
  const commentError = actionData?.error?.comment;
  const postError = actionData?.error?.post;

  // @ts-ignore
  const visualTree = toVisualTree(post.comments);

  const postComments = Object.values(visualTree).filter(({ comment }) => {
    return !comment.parentID;
  });

  useEffect(() => {
    if (transition.state === "submitting") {
      setComment("");
    }
  }, [transition.state]);

  return (
    <CenteredContainer css={{ gap: 5, pt: 20 }}>
      <PostItem post={post} showContent />
      <Separator css={{ mt: 10 }} />
      <Box css={{ mt: 10 }}>
        <Text size={5} css={{ fontWeight: 500, color: "$gray11" }}>
          Yorumlar
        </Text>
      </Box>
      <Form method="post" css={{ display: "flex", flexDirection: "column" }}>
        <Textarea
          css={{
            width: "auto",
            cursor: user ? "text" : "not-allowed",
            resize: user ? "vertical" : "none",
          }}
          name="content"
          disabled={!user}
          rows={4}
          onChange={(event) => setComment(event.target.value.trim())}
          value={user ? comment : "Yorum yazmak için giriş yapmış olmalısın."}
        />
        <GappedBox css={{ padding: "$1 0 $2", alignItems: "center", gap: 10 }}>
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
          {postError && (
            <ValidationMessage
              error={postError.message}
              isSubmitting={transition.state === "submitting"}
            />
          )}
        </GappedBox>
      </Form>
      {postComments.length > 0 && (
        <>
          {postComments.map(({ comment, comments }) => {
            return (
              <CommentItem
                expanded={expanded}
                key={comment.id}
                comment={comment}
                comments={comments}
                post={post}
                username={user?.username as string}
                allComments={visualTree}
                error={commentError ?? null}
              />
            );
          })}
        </>
      )}
    </CenteredContainer>
  );
};

export default SinglePost;
