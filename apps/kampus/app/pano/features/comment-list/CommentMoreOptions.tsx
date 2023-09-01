"use client";

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

import { generateBaseURL, getCommentURL } from "~/features/url/generate-url";
import { type CommentMoreOptions_comment$key } from "./__generated__/CommentMoreOptions_comment.graphql";
import { type CommentMoreOptions_viewer$key } from "./__generated__/CommentMoreOptions_viewer.graphql";

interface Props {
  comment: CommentMoreOptions_comment$key;
  viewerRef: CommentMoreOptions_viewer$key;
  commentConnectionID?: string;
  setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const useMoreOptionsCommentFragment = (key: CommentMoreOptions_comment$key) =>
  useFragment(
    graphql`
      fragment CommentMoreOptions_comment on PanoComment {
        id
        post {
          id
        }
        owner {
          displayName
        }
      }
    `,
    key
  );

const useMoreOptionsViewerFragment = (key: CommentMoreOptions_viewer$key) =>
  useFragment(
    graphql`
      fragment CommentMoreOptions_viewer on Viewer {
        actor {
          displayName
        }
      }
    `,
    key
  );

const removeCommentMutation = graphql`
  mutation CommentMoreOptionsRemoveCommentMutation($connections: [ID!]!, $commentID: ID!) {
    removePanoComment(input: { id: $commentID }) {
      edge {
        node {
          id @deleteEdge(connections: $connections)
          content
          createdAt
          owner {
            username
          }
          commentCount
        }
      }
    }
  }
`;

// TODO: move this to server side and don't use displayName
function canUserEdit(username?: string | null, owner?: string | null) {
  if (!owner) return false;
  if (!username) return false;

  return username === owner;
}

export const CommentMoreOptions = (props: Props) => {
  const comment = useMoreOptionsCommentFragment(props.comment);
  const viewer = useMoreOptionsViewerFragment(props.viewerRef);
  const { toast } = useToast();
  const [removeComment, isRemoving] = useMutation(removeCommentMutation);
  const shareUrl = getCommentURL({
    baseUrl: generateBaseURL("pano"),
    commentID: comment.id,
    postID: comment.post?.id ?? "",
  });

  const onClick = () => {
    if (!comment) {
      return;
    }

    if (isRemoving) {
      return;
    }

    removeComment({
      variables: { commentID: comment.id, connections: [props.commentConnectionID] },
    });
  };

  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="h-5 p-1" variant="ghost">
            <MoreHorizontal size="16" aria-label="Daha fazla seçenek" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {canUserEdit(viewer?.actor?.displayName, comment?.owner?.displayName) && (
            <>
              <DropdownMenuItem key="edit" onSelect={() => props.setEditOpen(true)}>
                Düzenle
              </DropdownMenuItem>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem>Sil</DropdownMenuItem>
              </AlertDialogTrigger>
              <DropdownMenuSeparator key="separator" />
            </>
          )}
          <DropdownMenuItem
            onSelect={async () => {
              await navigator.clipboard?.writeText(shareUrl);
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
