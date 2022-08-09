import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Link } from "@remix-run/react";
import type { FC } from "react";
import type { Post } from "~/API";
import { useUserContext } from "~/features/auth/user-context";
import { styled } from "~/stitches.config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./Dropdown";
import { IconButton } from "./IconButton";
import { useState } from "react";
import { canUserEdit } from "~/features/auth/can-user-edit";
import PostDeleteAlert from "~/ui-library/PostDeleteAlert";

const DotsButton = styled(IconButton, {
  borderRadius: 5,
  height: 25,
  width: 25,
  color: "$gray11",
});

const Item = styled(DropdownMenuItem, {
  minWidth: 0,
  // padding: "$1",
});

interface Props {
  post: Post;
}

export const MoreOptionsDropdown: FC<Props> = ({ post }) => {
  const user = useUserContext();
  const [open, setOpen] = useState(false);

  const onDelete = () => {
    setOpen(true);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <DotsButton color="transparent" aria-label="Daha fazla seçenek">
            <DotsHorizontalIcon />
          </DotsButton>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {canUserEdit(user, post) && (
            <>
              <Item as={Link} to={`/posts/${post.id}/edit`}>
                Düzenle
              </Item>
              <Item onSelect={onDelete}>Sil</Item>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <PostDeleteAlert open={open} setOpen={setOpen} postID={post.id} />
    </>
  );
};
