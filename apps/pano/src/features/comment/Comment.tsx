import { useTransition } from "@remix-run/react";
import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import type { Comment } from "~/models/comment.server";
import { styled } from "~/stitches.config";
import {
  Box,
  Button,
  Form,
  GappedBox,
  SmallLink,
  Text,
  Textarea,
  Timeago,
} from "~/ui-library";
import { useUserContext } from "../auth/user-context";

type CommentProps = {
  comment: Comment;
  postID: string;
  username: string;
  comments: Comment[];
  allComments: Record<string, { comment: Comment; comments: Comment[] }>;
  expanded: boolean;
};

export const CommentItem: FC<CommentProps> = ({
  comment,
  postID,
  username,
  comments,
  allComments,
  expanded,
}) => {
  const [open, setOpen] = useState(false);
  const [showComments, setShowComments] = useState(expanded);
  const user = useUserContext();
  const transition = useTransition();
  const isCommenting =
    transition.state === "submitting" &&
    transition.submission?.formData.get("commentID") === comment.id;

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!isCommenting && formRef.current) {
      formRef.current.reset();
      formRef.current.focus();
    }
  }, [isCommenting]);

  return (
    <GappedBox css={{ flexDirection: "column", gap: 15 }}>
      <GappedBox css={{ flexDirection: "column" }}>
        <GappedBox css={{ alignItems: "center" }}>
          <Text size="1">@{comment.owner.username}</Text>
          <Text size="1">
            <Timeago date={new Date(comment.createdAt)} />
          </Text>
        </GappedBox>
        <Box>
          <Text size="3" css={{ color: "$gray12" }}>
            {comment.content}
          </Text>
        </Box>
        <GappedBox>
          {user && (
            <SmallLink to="#" onClick={() => setOpen(!open)}>
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
            <Box>
              <Button value={comment.id} name="commentID" type="submit">
                {isCommenting ? "Kaydediliyor..." : "Cevapla"}
              </Button>
            </Box>
          </Form>
        </GappedBox>
      )}
      <CommentListContainer>
        {showComments &&
          comments.map((c) => {
            return (
              <div key={c.id} id={`c_${c.id}`} tabIndex={0}>
                <CommentItem
                  expanded={expanded}
                  comment={c}
                  username={username}
                  comments={allComments[c.id]?.comments ?? []}
                  postID={postID}
                  allComments={allComments}
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
