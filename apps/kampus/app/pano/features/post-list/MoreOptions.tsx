"use client";

import Link from "next/link";
import { MoreHorizontal } from "lucide-react";
import { graphql, useFragment, useMutation } from "react-relay";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  useToast,
} from "@kampus/ui";

import { type MoreOptions_post$key } from "./__generated__/MoreOptions_post.graphql";
import { type MoreOptions_viewer$key } from "./__generated__/MoreOptions_viewer.graphql";

interface Props {
  post: MoreOptions_post$key;
  viewerRef: MoreOptions_viewer$key | null;
  postConnectionId?: string;
}

const useMoreOptionsPostFragment = (key: MoreOptions_post$key | null) =>
  useFragment(
    graphql`
      fragment MoreOptions_post on PanoPost {
        id
        owner {
          displayName
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

const removePostMutation = graphql`
  mutation MoreOptionsRemovePostMutation($connections: [ID!]!, $postID: ID!) {
    removePanoPost(input: { id: $postID }) {
      edge {
        node {
          id @deleteEdge(connections: $connections)
          title
        }
      }
    }
  }
`;

// TODO: move this to server side
function canUserEdit(username?: string | null, owner?: string | null) {
  if (!owner) return false;
  if (!username) return false;

  return username === owner;
}

export const MoreOptionsDropdown = (props: Props) => {
  const post = useMoreOptionsPostFragment(props.post);
  const viewer = useMoreOptionsViewerFragment(props.viewerRef);
  const { toast } = useToast();
  const [removePost, isRemoving] = useMutation(removePostMutation);

  const onClick = () => {
    if (!post) {
      return;
    }

    if (isRemoving) {
      return;
    }

    removePost({ variables: { postID: post.id, connections: [props.postConnectionId] } });
  };

  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="h-5 p-1" variant="ghost">
            <MoreHorizontal size="16" aria-label="Daha fazla seçenek" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {canUserEdit(viewer?.actor?.displayName, post?.owner?.displayName) && (
            <>
              <DropdownMenuItem asChild key="edit">
                <Link href={`/post/${post?.id}/edit`}>Düzenle</Link>
              </DropdownMenuItem>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem>Sil</DropdownMenuItem>
              </AlertDialogTrigger>
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
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Silmek istediğine emin misin?</AlertDialogTitle>
          <AlertDialogDescription>
            Eğer bu gönderiyi silersen, bu işlemi geri alamazsın.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Hayır</AlertDialogCancel>
          <AlertDialogAction onClick={onClick}>Evet</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
