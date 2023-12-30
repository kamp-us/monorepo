"use client";

import Link from "next/link";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { AlertDialog, Button, DropdownMenu, Flex, IconButton } from "@radix-ui/themes";
import { graphql, useFragment, useMutation } from "react-relay";

import { useToast } from "@kampus/ui";

import { type MoreOptions_post$key } from "./__generated__/MoreOptions_post.graphql";
import { type MoreOptions_viewer$key } from "./__generated__/MoreOptions_viewer.graphql";

interface Props {
  post: MoreOptions_post$key;
  viewerRef: MoreOptions_viewer$key | null;
  postConnectionID?: string;
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
  console.log({ username, owner });
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

    removePost({ variables: { postID: post.id, connections: [props.postConnectionID] } });
  };

  return (
    <AlertDialog.Root>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <IconButton variant="ghost" color="gray">
            <DotsVerticalIcon width="16" height="16" aria-label="Daha fazla seçenek" />
          </IconButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          {canUserEdit(viewer?.actor?.displayName, post?.owner?.displayName) && (
            <>
              <Link href={`/post/${post?.id}/edit`}>
                <DropdownMenu.Item asChild key="edit" disabled>
                  Düzenle
                </DropdownMenu.Item>
              </Link>
              <AlertDialog.Trigger>
                <DropdownMenu.Item>Sil</DropdownMenu.Item>
              </AlertDialog.Trigger>
              <DropdownMenu.Separator key="separator" />
            </>
          )}
          <DropdownMenu.Item
            onSelect={() => {
              toast({
                description: "Link kopyalandı",
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
