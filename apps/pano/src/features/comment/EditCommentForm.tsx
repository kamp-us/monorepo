import {
    Button,
    Form,
    GappedBox,
    Textarea,
  } from "@kampus/ui";
import { useFetcher, useTransition } from "@remix-run/react";import type { FC } from "react";
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
    const variables = {
      commentID: comment.id,
      commentContent: editedComment,
    };

    return (
        <fetcher.Form method="post" action="/commentEdit">
            <Textarea name="comment" 
                defaultValue={comment.content}
                onChange={(event) => setEditedComment(event.target.value)} 
            />
            <input
              type="hidden"
              name="json"
              value={JSON.stringify(variables)}
            />
            <Button type="submit">Kaydet</Button>
            <Button onClick={() => setEditOpen(false)}>İptal</Button>
          </fetcher.Form>
    )
}

export default EditCommentForm;