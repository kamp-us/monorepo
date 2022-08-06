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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <DotsButton color="transparent" aria-label="Daha fazla seçenek">
          <DotsHorizontalIcon />
        </DotsButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {!!user && post.owner === user.username && (
          <Item as={Link} to={`/posts/${post.id}/edit`}>
            Düzenle
          </Item>
        )}
        {!!user && post.owner === user.username && <Item>Sil</Item>}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
