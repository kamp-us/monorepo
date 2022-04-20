import { FC, useRef, useState, useEffect } from "react";
import { Comment } from "../../API";
import { styled } from "../../stitches.config";
import { GappedBox } from "../../ui-library/GappedBox";
import { Box } from "../../ui-library/layout-components/Box";
import { Button } from "../../ui-library/layout-components/Button";
import { SmallLink } from "../../ui-library/SmallLink";
import { Text } from "../../ui-library/Text";
import { Textarea } from "../../ui-library/Textarea";
import { Timeago } from "../../ui-library/Timeago";
import { useUserContext } from "../auth/user-context";
import { Form } from "~/ui-library/Form";
import { useTransition } from "@remix-run/react";

type CommentProps = {
  comment: Comment;
  postID: string;
  username: string;
  comments: Comment[];
  allComments: Record<string, { comment: Comment; comments: Comment[] }>;
};

export const CommentItem: FC<CommentProps> = ({
  comment,
  postID,
  username,
  comments,
  allComments,
}) => {
  const [open, setOpen] = useState(false);
  const [showComments, setShowComments] = useState(false);
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
          <Text size="1">@{comment.owner}</Text>
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
            <SmallLink to="#" onClick={() => setShowComments(!showComments)}>
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
              <CommentItem
                key={c.id}
                comment={c}
                username={username}
                comments={allComments[c.id]?.comments ?? []}
                postID={postID}
                allComments={allComments}
              />
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
