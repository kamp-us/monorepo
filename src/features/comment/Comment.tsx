import { FC, useState } from "react";
import {
  Comment,
  CreateCommentMutation,
  CreateCommentMutationVariables,
} from "../../API";
import { createComment } from "../../graphql/mutations";
import { styled } from "../../stitches.config";
import { GappedBox } from "../../ui-library/GappedBox";
import { Box } from "../../ui-library/layout-components/Box";
import { Button } from "../../ui-library/layout-components/Button";
import { SmallLink } from "../../ui-library/SmallLink";
import { Text } from "../../ui-library/Text";
import { Textarea } from "../../ui-library/Textarea";
import { Timeago } from "../../ui-library/Timeago";
import { useUserContext } from "../auth/user-context";
import { GQLOperation } from "../utils/amplify/GQLOperation";

type CommentProps = {
  comment: Comment;
  postID: string;
  username: string;
  comments: Comment[];
  allComments: Record<string, { comment: Comment; comments: Comment[] }>;
  refetch: () => void;
};

export const CommentItem: FC<CommentProps> = ({
  comment,
  postID,
  username,
  comments,
  allComments,
  refetch,
}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const user = useUserContext();

  const [showComments, setShowComments] = useState(false);

  const addComment = async (commentID: string) => {
    try {
      if (!message) return;

      const variables = {
        input: {
          content: message,
          parentID: commentID,
          owner: username,
          postID: postID as string,
        },
      };

      await GQLOperation<CreateCommentMutation, CreateCommentMutationVariables>(
        createComment,
        variables
      );

      refetch();
      setOpen(false);
    } catch (e) {
      console.log("error adding comment", e);
    }
  };

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
          <Textarea
            rows={6}
            onChange={(event) => setMessage(event.target.value)}
          />
          <Box>
            <Button onClick={() => addComment(comment.id)}>Gönder</Button>
          </Box>
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
                refetch={refetch}
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
