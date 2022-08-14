import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Link } from "@remix-run/react";
import type { FC } from "react";
import type { Post } from "~/models/post.server";
import { useUserContext } from "~/features/auth/user-context";
import { styled } from "~/stitches.config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./Dropdown";
import { IconButton } from "./IconButton";
import { isOwner } from "~/models/user.server";

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

  const ownerItems: JSX.Element[] = [];
  if (isOwner(user, post)) {
    ownerItems.push(
      <Item as={Link} to={`/posts/${post.id}/edit`}>
        Düzenle
      </Item>
    );
    ownerItems.push(<Item>Sil</Item>);
  }

  const menuItems = [...ownerItems];

  if (menuItems.length === 0) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <DotsButton color="transparent" aria-label="Daha fazla seçenek">
          <DotsHorizontalIcon />
        </DotsButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent>{ownerItems}</DropdownMenuContent>
    </DropdownMenu>
  );
};
