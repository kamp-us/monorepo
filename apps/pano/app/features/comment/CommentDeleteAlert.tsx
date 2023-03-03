import {
  AlertDialogAction,
  AlertDialogBase,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  Button,
  GappedBox,
} from "@kampus/ui";
import { useFetcher } from "@remix-run/react";
import React from "react";

type AlertDialogProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  commentID: string;
};

const CommentDeleteAlert = ({ commentID, open, setOpen }: AlertDialogProps) => {
  const fetcher = useFetcher();
  const variables = {
    id: commentID,
  };

  return (
    <AlertDialogBase open={open}>
      <AlertDialogContent>
        <AlertDialogTitle>Silmek istediğine emin misin?</AlertDialogTitle>
        <AlertDialogDescription>
          Eğer bu gönderiyi silersen, bu işlemi geri alamazsın.
        </AlertDialogDescription>
        <GappedBox css={{ justifyContent: "flex-end" }}>
          <AlertDialogCancel asChild onClick={() => setOpen(false)}>
            <Button variant="green" css={{ marginRight: 25 }}>
              Hayır
            </Button>
          </AlertDialogCancel>
          <fetcher.Form
            method="post"
            action="/delete-comment"
            onSubmit={() => {
              setOpen(false);
            }}
          >
            <AlertDialogAction asChild>
              <Button variant="red" type="submit">
                Evet
              </Button>
            </AlertDialogAction>
            <input
              type="hidden"
              name="json"
              value={JSON.stringify(variables)}
            />
          </fetcher.Form>
        </GappedBox>
      </AlertDialogContent>
    </AlertDialogBase>
  );
};
export default CommentDeleteAlert;
