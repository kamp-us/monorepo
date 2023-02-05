import { Button, Textarea } from "@kampus/ui";
import { useFetcher } from "@remix-run/react";
import type { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import type { Comment } from "~/models/comment.server";
type EditCommentProps = {
  comment: Comment;
  setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

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

  useEffect(() => {
    if (fetcher.type === "done") {
      setEditOpen(false);
    }
  }, [fetcher.type, setEditOpen]);

  return (
    <fetcher.Form method="post" action="/commentEdit">
      <Textarea
        name="content"
        defaultValue={comment.content}
        onChange={(event) => setEditedComment(event.target.value)}
      />
      <input type="hidden" name="id" value={variables.commentID} />
      <Button type="submit">
        {isCommenting ? "Kaydediliyor..." : "Kaydet"}
      </Button>
      <Button onClick={() => setEditOpen(false)}>İptal</Button>
    </fetcher.Form>
  );
};

export default EditCommentForm;
