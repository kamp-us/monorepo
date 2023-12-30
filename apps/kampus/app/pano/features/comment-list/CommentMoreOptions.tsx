"use client";

import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { AlertDialog, Button, DropdownMenu, Flex, IconButton } from "@radix-ui/themes";
import { graphql, useFragment, useMutation } from "react-relay";

import { useToast } from "@kampus/ui";

import { getCommentURL } from "~/features/kampus-url/pano";
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
        post @required(action: LOG) {
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

  if (!comment) return null;
  const shareUrl = getCommentURL({ postID: comment.post.id, commentID: comment.id });

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
    <AlertDialog.Root>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <IconButton variant="ghost" color="gray">
            <DotsVerticalIcon width="16" height="16" aria-label="Daha fazla seçenek" />
          </IconButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          {canUserEdit(viewer?.actor?.displayName, comment?.owner?.displayName) && (
            <>
              <DropdownMenu.Item key="edit" onSelect={() => props.setEditOpen(true)}>
                Düzenle
              </DropdownMenu.Item>
              <AlertDialog.Trigger>
                <DropdownMenu.Item>Sil</DropdownMenu.Item>
              </AlertDialog.Trigger>
              <DropdownMenu.Separator key="separator" />
            </>
          )}
          <DropdownMenu.Item
            onSelect={() => {
              void navigator.clipboard?.writeText(shareUrl).then(() => {
                toast({
                  description: "Link kopyalandı",
                });
              });
            }}
          >
            Linki kopyala
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <AlertDialog.Content>
        <AlertDialog.Title>Silmek istediğine emin misin?</AlertDialog.Title>
        <AlertDialog.Description>
          Eğer bu gönderiyi silersen, bu işlemi geri alamazsın.
        </AlertDialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Hayır
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action onClick={onClick}>
            <Button variant="solid" color="red">
              Evet
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};
