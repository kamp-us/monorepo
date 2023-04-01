import { Button, GappedBox, Textarea, ValidationMessage } from "@kampus/ui";
import { useFetcher } from "@remix-run/react";
import type { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import type { Comment } from "~/models/comment.server";
import { validate } from "~/utils";

type EditCommentProps = {
  comment: Comment;
  setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EditCommentForm: FC<EditCommentProps> = ({
  comment,
  setEditOpen,
}) => {
  const [editedComment, setEditedComment] = useState(comment.content);
  const [error, setError] = useState("");
  const fetcher = useFetcher();
  const isCommenting =
    fetcher.state === "submitting" || fetcher.state === "loading";
  const variables = {
    commentID: comment.id,
    commentContent: editedComment,
  };

  useEffect(() => {
    if (fetcher.type === "done") {
      setEditOpen(false);
    }
  }, [fetcher.type, setEditOpen]);

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    if (validate(value)) {
      setEditedComment(value);
      setError("");
    } else {
      setError("Yorum boş gönderilemez.");
    }
  };

  return (
    <fetcher.Form method="post" action="/commentEdit">
      <GappedBox css={{ flexDirection: "column" }}>
        <Textarea
          name="comment"
          defaultValue={comment.content}
          onChange={handleCommentChange}
        />
        <input type="hidden" name="json" value={JSON.stringify(variables)} />
        <GappedBox>
          <Button type="submit" disabled={error ? true : false}>
            {isCommenting ? "Kaydediliyor..." : "Kaydet"}
          </Button>
          <Button onClick={() => setEditOpen(false)}>İptal</Button>
          {error && (
            <ValidationMessage error={error} isSubmitting={isCommenting} />
          )}
        </GappedBox>
      </GappedBox>
    </fetcher.Form>
  );
};

export default EditCommentForm;
