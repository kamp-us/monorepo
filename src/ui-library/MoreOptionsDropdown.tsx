import React, { FC, useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { keyframes, styled } from "@stitches/react";
import {
  CheckIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Collection, Post } from "~/API";
import { useFetcher } from "@remix-run/react";
import { ToastComponent } from "~/ui-library/Toast";
import { GappedBox } from "./GappedBox";
import { Link } from "~/ui-library/Link";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const StyledContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: 180,
  backgroundColor: "$gray3",
  borderRadius: 6,
  padding: 5,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    animationFillMode: "forwards",
    willChange: "transform, opacity",
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const itemStyles = {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: "$gray11",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 5px",
  position: "relative",
  paddingLeft: 25,
  userSelect: "none",

  "&[data-disabled]": {
    color: "$gray8",
    pointerEvents: "none",
  },

  "&:focus": {
    backgroundColor: "$gray4",
    color: "$amber12",
  },
};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, {
  ...itemStyles,
});
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, {
  ...itemStyles,
});
const StyledTriggerItem = styled(DropdownMenuPrimitive.TriggerItem, {
  '&[data-state="open"]': {
    backgroundColor: "$gray3",
    color: "$gray11",
  },
  ...itemStyles,
});

const StyledLabel = styled(DropdownMenuPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: "25px",
  color: "$gray11",
});

const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: "$gray6",
  margin: 5,
});

const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: "$gray4",
});

// Exports
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = StyledContent;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuCheckboxItem = StyledCheckboxItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuRadioItem = StyledRadioItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuTriggerItem = StyledTriggerItem;
export const DropdownMenuLabel = StyledLabel;
export const DropdownMenuSeparator = StyledSeparator;
export const DropdownMenuArrow = StyledArrow;

const RightSlot = styled("div", {
  marginLeft: "auto",
  paddingLeft: 20,
  color: "$gray11",
  ":focus > &": { color: "$amber1" },
  "[data-disabled] &": { color: "$amber8" },
});

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: 5,
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$gray11",
  "&:hover": { backgroundColor: "$gray3" },
  "&:focus": { boxShadow: `0 0 0 2px $colors$amber9` },
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
          <IconButton aria-label="Daha fazla seçenek">
            <DotsHorizontalIcon />
          </IconButton>
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
