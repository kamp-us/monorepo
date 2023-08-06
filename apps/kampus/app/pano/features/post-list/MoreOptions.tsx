"use client";

import { MoreHorizontal } from "lucide-react";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  useToast,
} from "@kampus/ui-next";

interface Props {
  post: Post;
  shareUrl: string;
}

type Post = {
  __typename?: "PanoPost";
  content: string;
  createdAt: string;
  id: string;
  owner: string;
  title: string;
  url: string;
};

export const MoreOptionsDropdown = ({ post, shareUrl }: Props) => {
  // const user = useUserContext();
  console.log(post, shareUrl);
  const { toast } = useToast();
  const ownerItems: JSX.Element[] = [];
  // if (canUserEdit(user, post)) {
  //   ownerItems.push(
  //     <Item onSelect={() => navigate(`/posts/${post.id}/edit`)} key="edit">
  //       Düzenle
  //     </Item>
  //   );
  //   ownerItems.push(
  //     <Item onSelect={handleOpen} key="delete">
  //       Sil
  //     </Item>
  //   );
  //   ownerItems.push(<DropdownMenuSeparator key="separator" />);
  // }

  // // FIXME: below appears to be redundant, is it?
  // const menuItems = [...ownerItems];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-5 p-1" variant="ghost">
          <MoreHorizontal size="16" aria-label="Daha fazla seçenek" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {ownerItems}
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
  );
};
