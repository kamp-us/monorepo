import { Button, GappedBox, Textarea, ValidationMessage } from "@kampus/ui";
import { useFetcher } from "@remix-run/react";
import type { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { z } from "zod";
import type { Comment } from "~/models/comment.server";

type EditCommentProps = {
  comment: Comment;
  setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const commentSchema = z.object({
  content: z.string().min(1, "Yorum boş gönderilemez."),
});

export const EditCommentForm: FC<EditCommentProps> = ({
  comment,
  setEditOpen,
}) => {
  const [editedComment, setEditedComment] = useState(comment.content);
  const fetcher = useFetcher();
  const isCommenting =
    fetcher.state === "submitting" || fetcher.state === "loading";
  const variables = {
    commentID: comment.id,
    commentContent: editedComment,
  };

  const validationResult = commentSchema.safeParse({ content: editedComment });
  const errorMessage = validationResult.success
    ? undefined
    : validationResult.error?.errors[0].message;

  useEffect(() => {
    if (fetcher.type === "done") {
      setEditOpen(false);
    }
  }, [fetcher.type, setEditOpen]);

  return (
    <fetcher.Form method="post" action="/commentEdit">
      <GappedBox css={{ flexDirection: "column" }}>
        <Textarea
          name="comment"
          defaultValue={comment.content}
          onChange={(event) => setEditedComment(event.target.value)}
        />
        <input type="hidden" name="json" value={JSON.stringify(variables)} />
        <GappedBox>
          <Button type="submit" disabled={!!errorMessage}>
            {isCommenting ? "Kaydediliyor..." : "Kaydet"}
          </Button>
          <Button onClick={() => setEditOpen(false)}>İptal</Button>
          {errorMessage && (
            <ValidationMessage
              error={errorMessage}
              isSubmitting={isCommenting}
            />
          )}
        </GappedBox>
      </GappedBox>
    </fetcher.Form>
  );
};

export default EditCommentForm;
