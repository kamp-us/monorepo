import {
  Box,
  Button,
  Form,
  GappedBox,
  SmallLink,
  styled,
  Text,
  Textarea,
  Timeago,
  ValidationMessage,
} from "@kampus/ui";
import type { SerializeFrom } from "@remix-run/node";
import { useFetcher, useLocation, useTransition } from "@remix-run/react";
import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { useConfigContext } from "~/features/config/config-context";
import type { Comment } from "~/models/comment.server";
import type { Post } from "~/models/post.server";
import { getExternalCommentURL } from "~/utils";
import { EditCommentForm } from "./EditCommentForm";
import { MoreOptionsDropdown } from "./MoreOptionsDropdown";
import { useUserContext } from "../auth/user-context";
import { CommentUpvoteButton } from "../upvote/UpvoteButton";

type CommentProps = {
  comment: Comment;
  post: SerializeFrom<Post>;
  username: string;
  comments: Comment[];
  allComments: Record<string, { comment: Comment; comments: Comment[] }>;
  expanded: boolean;
  error: {
    message: string;
    id: string;
  } | null;
};

const getVariables = (
  type: "create" | "delete",
  input: { commentID: string; userID: string }
) => {
  return { type, input };
};

export const CommentItem: FC<CommentProps> = ({
  comment,
  post,
  username,
  comments,
  allComments,
  expanded,
  error,
}) => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [showComments, setShowComments] = useState(true);
  const user = useUserContext();
  const { baseUrl } = useConfigContext();
  const transition = useTransition();
  const isCommenting =
    transition.state === "submitting" &&
    transition.submission?.formData.get("commentID") === comment.id;
  const fetcher = useFetcher();
  const isLoading = !!fetcher.submission;
  const isUpvoted =
    user && comment ? comment.upvotes.some((u) => u.userID === user.id) : false;
  const shareUrl = getExternalCommentURL({
    baseUrl,
    comment,
    post,
  });
  const location = useLocation();
  const targetHash = location.state?.targetHash;
  const variables = user
    ? isUpvoted
      ? getVariables("delete", { commentID: comment.id, userID: user.id })
      : getVariables("create", { commentID: comment.id, userID: user.id })
    : null;

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!isCommenting && formRef.current) {
      setOpen(false);
      setShowComments(true);
      formRef.current.reset();
      formRef.current.focus();
    }
  }, [isCommenting]);

  useEffect(() => {
    setShowComments(expanded);
  }, [expanded]);

  return (
    <GappedBox css={{ flexDirection: "column" }}>
      <GappedBox
        id={`c_${comment.id}`}
        className={targetHash === comment.id ? "target" : ""}
        tabIndex={0}
        css={{
          flexDirection: "column",
          transition: "background-color 0.3s",
          "&:target": !targetHash
            ? {
                backgroundColor: "$amber4",
                borderRadius: "8px",
                padding: "5px",
              }
            : {},
          "&.target": {
            backgroundColor: "$amber4",
            borderRadius: "8px",
            padding: "5px",
          },
        }}
      >
        <GappedBox css={{ alignItems: "center" }}>
          <Text size="1">@{comment.owner.username}</Text>
          <Text size="1">
            <Timeago date={new Date(comment.createdAt)} />
          </Text>
          <fetcher.Form method="post" action="/commentUpvote">
            <CommentUpvoteButton
              isUpvoted={isUpvoted}
              upvoteCount={comment.upvotes.length}
              isVoting={isLoading}
              disabled={!user}
            />
            <input
              type="hidden"
              name="json"
              value={JSON.stringify(variables)}
            />
          </fetcher.Form>
          <MoreOptionsDropdown
            comment={comment}
            setEditOpen={setEditOpen}
            shareUrl={shareUrl}
          />
        </GappedBox>
        <Box>
          {(editOpen && (
            <EditCommentForm comment={comment} setEditOpen={setEditOpen} />
          )) || (
            <Text
              size="3"
              lineHeight="2"
              css={{ color: "$gray12", whiteSpace: "break-spaces" }}
            >
              {comment.content}
            </Text>
          )}
        </Box>
        <GappedBox css={{ alignItems: "center" }}>
          {user && (
            <SmallLink
              to="#"
              onClick={(e) => {
                e.preventDefault();
                setOpen(!open);
              }}
            >
              Cevapla
            </SmallLink>
          )}
          {comments.length > 0 && (
            <SmallLink
              to="#"
              onClick={(e) => {
                e.preventDefault();
                setShowComments(!showComments);
              }}
            >
              {showComments
                ? "Gizle"
                : `Göster (${comments.length ?? 0} yorum)`}
            </SmallLink>
          )}
        </GappedBox>
      </GappedBox>
      {open && (
        <GappedBox css={{ flexDirection: "column" }}>
          <Form ref={formRef} method="post" css={{ width: "100%" }}>
            <Textarea css={{ width: "100%" }} rows={6} name="content" />
            <GappedBox
              css={{ padding: "$1 0 $2", gap: 10, alignItems: "center" }}
            >
              <Button value={comment.id} name="commentID" type="submit">
                {isCommenting ? "Kaydediliyor..." : "Cevapla"}
              </Button>
              {error && error.id === comment.id && (
                <ValidationMessage
                  error={error.message}
                  isSubmitting={transition.state === "submitting"}
                />
              )}
            </GappedBox>
          </Form>
        </GappedBox>
      )}
      <CommentListContainer>
        {showComments &&
          comments.map((c) => {
            return (
              <div key={c.id}>
                <CommentItem
                  expanded={expanded}
                  comment={c}
                  username={username}
                  comments={allComments[c.id]?.comments ?? []}
                  post={post}
                  allComments={allComments}
                  error={error}
                />
              </div>
            );
          })}
      </CommentListContainer>
    </GappedBox>
  );
};

const CommentListContainer = styled(Box, {
  paddingLeft: 25,
  borderLeft: "1px dotted $gray6",
});
