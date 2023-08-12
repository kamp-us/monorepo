"use client";

import Link from "next/link";
import { MoreHorizontal } from "lucide-react";
import { graphql, useFragment } from "react-relay";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  useToast,
} from "@kampus/ui-next";

import { MoreOptions_post$key } from "./__generated__/MoreOptions_post.graphql";
import { MoreOptions_viewer$key } from "./__generated__/MoreOptions_viewer.graphql";

interface Props {
  post: MoreOptions_post$key;
  viewerRef: MoreOptions_viewer$key | null;
}

const useMoreOptionsPostFragment = (key: MoreOptions_post$key | null) =>
  useFragment(
    graphql`
      fragment MoreOptions_post on PanoPost {
        id
        owner {
          username
        }
      }
    `,
    key
  );

const useMoreOptionsViewerFragment = (key: MoreOptions_viewer$key | null) =>
  useFragment(
    graphql`
      fragment MoreOptions_viewer on Viewer {
        actor {
          displayName
        }
      }
    `,
    key
  );

function canUserEdit(session?: any, owner?: any) {
  if (!owner) return false;
  if (!session) return false;

  const username = session.user?.name;
  return username === owner;
}

export const MoreOptionsDropdown = (props: Props) => {
  const post = useMoreOptionsPostFragment(props.post);
  const viewer = useMoreOptionsViewerFragment(props.viewerRef);
  const { toast } = useToast();

  const ownerItems: JSX.Element[] = [];
  // if (canUserEdit(session, post.owner?.username)) {
  ownerItems.push(
    <DropdownMenuItem key="edit">
      <Link href={`/post/${post?.id}/edit`}>Düzenle</Link>
    </DropdownMenuItem>
  );
  ownerItems.push(
    <DialogTrigger asChild>
      <DropdownMenuItem>Sil</DropdownMenuItem>
    </DialogTrigger>
  );
  ownerItems.push(<DropdownMenuSeparator key="separator" />);
  // }

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="h-5 p-1" variant="ghost">
            <MoreHorizontal size="16" aria-label="Daha fazla seçenek" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {canUserEdit({ user: { name: "can" } }, "can") && (
            <>
              <DropdownMenuItem key="edit">
                <Link href={`/post/${post?.id}/edit`}>Düzenle</Link>
              </DropdownMenuItem>
              <DialogTrigger asChild>
                <DropdownMenuItem>Sil</DropdownMenuItem>
              </DialogTrigger>
              <DropdownMenuSeparator key="separator" />
            </>
          )}
          <DropdownMenuItem
            onSelect={() => {
              toast({
                description: "Link kopyalandı",
              });
            }}
          >
            Linki kopyala
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Silmek istediğine emin misin?</DialogTitle>
          <DialogDescription>
            Eğer bu gönderiyi silersen, bu işlemi geri alamazsın.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" type="submit">
            Hayır
          </Button>
          <Button variant="destructive" type="submit">
            Evet
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
