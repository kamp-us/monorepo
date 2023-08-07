"use client";

import { useRouter } from "next/navigation";
import { MoreHorizontal } from "lucide-react";

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
type User = {
  username: string;
};

function canUserEdit(user: User, post: Post) {
  console.log(user, post);
  return true;
}

export const MoreOptionsDropdown = ({ post, shareUrl }: Props) => {
  const user = { username: "cancan" };
  console.log(post, shareUrl);

  const router = useRouter();
  const { toast } = useToast();

  const ownerItems: JSX.Element[] = [];
  if (canUserEdit(user, post)) {
    ownerItems.push(
      <DropdownMenuItem onSelect={() => router.push(`/posts/${post.id}/edit`)} key="edit">
        Düzenle
      </DropdownMenuItem>
    );
    ownerItems.push(
      <DialogTrigger asChild>
        <DropdownMenuItem>Sil</DropdownMenuItem>
      </DialogTrigger>
    );
    ownerItems.push(<DropdownMenuSeparator key="separator" />);
  }

  // // FIXME: below appears to be redundant, is it?
  // const menuItems = [...ownerItems];

  return (
    <Dialog>
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
