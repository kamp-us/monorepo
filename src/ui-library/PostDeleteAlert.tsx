import React from "react";
import { GappedBox } from "~/ui-library/GappedBox";
import { Button } from "~/ui-library/layout-components/Button";
import {
  AlertDialogAction,
  AlertDialogBase,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "~/ui-library/AlertDialog";
import { useFetcher } from "@remix-run/react";

type AlertDialogProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  postID: string;
};

const PostDeleteAlert = ({ open, setOpen, postID }: AlertDialogProps) => {
  const fetcher = useFetcher();
  const variables = {
    input: {
      id: postID,
    },
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
            action="/delete-post"
            onSubmit={() => setOpen(false)}
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
export default PostDeleteAlert;
