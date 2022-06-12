import { FC, useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { styled } from "~/stitches.config";
import {
  CheckIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import { Collection, Post } from "~/API";
import { useFetcher } from "@remix-run/react";
import { ToastComponent } from "~/ui-library/Toast";
import { GappedBox } from "./GappedBox";
import { Link } from "~/ui-library/Link";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemIndicator,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuTriggerItem,
  RightSlot,
} from "./Dropdown";
import { IconButton } from "./IconButton";

const DotsButton = styled(IconButton, {
  borderRadius: 5,
  height: 25,
  width: 25,
  color: "$gray11",
});

type DropdownMenuProps = {
  collections: Collection[];
  post: Post;
};

const isChecked = (post: Post, collection: Collection) => {
  const id = collection.posts?.items.find(
    (item) => item?.postID === post.id
  )?.id;
  const checked = post.collections?.items.some(
    (item) => item && item.collectionID === collection.id
  );
  return { id, checked };
};

export const MoreOptionsDropdown: FC<DropdownMenuProps> = ({
  collections,
  post,
}) => {
  const [copied, setCopied] = useState(false);
  const [toaster, setToaster] = useState(false);
  const timerRef = useRef(0);
  const fetcher = useFetcher();

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const onCollectionSelect = (
    collectionID: string,
    collectionPostsID?: string
  ) => {
    const variables = { collectionID, postID: post.id };

    if (collectionPostsID) {
      fetcher.submit(
        { collectionPostsID, ...variables },
        { method: "post", action: "/collections/add" }
      );
    } else {
      fetcher.submit(variables, { method: "post", action: "/collections/add" });
    }
  };

  const onShareSelect = () => {
    setToaster(false);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setToaster(true);
    }, 100);
    timerRef.current = window.setTimeout(() => {
      setToaster(false);
      setCopied(false);
    }, 2000);
  };

  return (
    <GappedBox>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <DotsButton color="transparent" aria-label="Daha fazla seçenek">
            <DotsHorizontalIcon />
          </DotsButton>
        </DropdownMenuTrigger>

        <DropdownMenuContent sideOffset={5} side="right" align="start">
          <DropdownMenu>
            <DropdownMenuTriggerItem>
              Koleksiyona ekle
              <RightSlot>
                <ChevronRightIcon />
              </RightSlot>
            </DropdownMenuTriggerItem>
            <DropdownMenuContent sideOffset={6} alignOffset={-5}>
              {collections.map((collection) => {
                const { id, checked } = isChecked(post, collection);
                return (
                  <DropdownMenuCheckboxItem
                    key={collection.id}
                    onSelect={() => onCollectionSelect(collection.id, id)}
                    checked={checked}
                  >
                    <DropdownMenuItemIndicator>
                      <CheckIcon />
                    </DropdownMenuItemIndicator>
                    {collection.name}
                  </DropdownMenuCheckboxItem>
                );
              })}
              {collections.length > 1 && <DropdownMenuSeparator />}
              <Link to={`/collections/new`}>
                <DropdownMenuItem>Yeni koleksiyon yarat</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          <CopyToClipboard text={`https://pano.kamp.us/posts/${post.id}`}>
            <DropdownMenuCheckboxItem
              checked={copied}
              onCheckedChange={() => setCopied(true)}
              onSelect={onShareSelect}
            >
              <DropdownMenuItemIndicator>
                <CheckIcon />
              </DropdownMenuItemIndicator>
              Adresi kopyala
            </DropdownMenuCheckboxItem>
          </CopyToClipboard>
        </DropdownMenuContent>
      </DropdownMenu>
      <ToastComponent open={toaster} setOpen={setToaster} />
    </GappedBox>
  );
};
