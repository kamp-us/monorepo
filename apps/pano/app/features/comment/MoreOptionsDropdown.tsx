import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  FacebookShare,
  GappedBox,
  IconButton,
  RedditShare,
  styled,
  Toast,
  TwitterShare,
} from "@kampus/ui";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import type { FC } from "react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { canUserEdit } from "~/features/auth/can-user-edit";
import { useUserContext } from "~/features/auth/user-context";
import type { Comment } from "~/models/comment.server";
import CommentDeleteAlert from "./CommentDeleteAlert";

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
  comment: Comment;
  setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  shareUrl: string;
}

export const MoreOptionsDropdown: FC<Props> = ({ comment, setEditOpen, shareUrl }) => {
  const user = useUserContext();
  const [openAlert, setOpenAlert] = useState(false);
  const [openToast, setOpenToast] = useState(false);

  const handleOpen = () => {
    setOpenAlert(true);
  };

  const handleIsEditing = () => {
    setEditOpen(true);
  };

  const ownerItems: JSX.Element[] = [];
  if (canUserEdit(user, comment) && comment.deletedAt === null) {
    ownerItems.push(
      <Item onSelect={handleIsEditing} key="edit">
        Düzenle
      </Item>
    );
    ownerItems.push(
      <Item onSelect={handleOpen} key="delete">
        Sil
      </Item>
    );
    ownerItems.push(<DropdownMenuSeparator key="separator" />);
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <DotsButton color="transparent" aria-label="Daha fazla seçenek">
            <DotsHorizontalIcon />
          </DotsButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {ownerItems}
          <MoreOptionsShareButtons commentUrl={shareUrl} openToast={setOpenToast} />
        </DropdownMenuContent>
      </DropdownMenu>
      <CommentDeleteAlert open={openAlert} setOpen={setOpenAlert} commentID={comment.id} />
      <Toast open={openToast} setOpen={setOpenToast} duration={5000} title="Link kopyalandı" />
    </>
  );
};

const SocialMediaShareButtons = ({ commentUrl }: { commentUrl: string }) => {
  return (
    <GappedBox css={{ paddingLeft: 25, paddingTop: 5 }}>
      <FacebookShare size={20} postUrl={commentUrl} />
      <TwitterShare size={20} postUrl={commentUrl} />
      <RedditShare size={20} postUrl={commentUrl} />
    </GappedBox>
  );
};

type MoreOptionsShareButtonsProps = {
  commentUrl: string;
  openToast: (value: boolean) => void;
};

const MoreOptionsShareButtons = ({ commentUrl, openToast }: MoreOptionsShareButtonsProps) => {
  const onCopySelect = () => {
    openToast(true);
  };

  return (
    <>
      <CopyToClipboard text={commentUrl}>
        <Item onSelect={onCopySelect}>Adresi kopyala</Item>
      </CopyToClipboard>
      <SocialMediaShareButtons commentUrl={commentUrl} />
    </>
  );
};
