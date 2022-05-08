import { Post } from "~/API";
import { useFetcher } from "@remix-run/react";
import { FC } from "react";
import { useUserContext } from "../auth/user-context";
import {
  Box,
  Button,
  ExternalLink,
  GappedBox,
  Input,
  Label,
  SmallLink,
  UpvoteButton,
} from "~/ui-library";
import { Cross2Icon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "~/ui-library/Dialog";
import { SelectComponent } from "~/ui-library/Select";

type PostItemProps = {
  post: Post;
};

export const PostItem: FC<PostItemProps> = ({ post }) => {
  const user = useUserContext();
  const fetcher = useFetcher();
  const isLoading = !!fetcher.submission;

  const variables = !post.isUpvoted
    ? {
        type: "create",
        input: {
          postID: post.id,
          postUpvotesId: post.id,
          owner: user?.username,
        },
      }
    : {
        type: "delete",
        input: {
          postID: post.id,
          owner: user?.username,
        },
      };

  return (
    <GappedBox css={{ padding: 5, alignItems: "center" }}>
      <fetcher.Form method="post" action="/upvote">
        <UpvoteButton
          isUpvoted={!!post.isUpvoted}
          upvoteCount={post.upvoteCount ?? 0}
          isVoting={isLoading}
        />
        <input type="hidden" name="json" value={JSON.stringify(variables)} />
      </fetcher.Form>
      <GappedBox css={{ flexDirection: "column" }}>
        <GappedBox css={{ alignItems: "center" }}>
          <ExternalLink
            href={`//${post.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {post.title}
          </ExternalLink>
          <SmallLink to={`//${post.url}`}>{post.url}</SmallLink>
        </GappedBox>
        <GappedBox
          css={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            color: "$gray9",
            fontSize: "0.8rem",
          }}
        >
          <Box>@{post.owner}</Box> |
          <SmallLink to={`/posts/${post.id}`}>
            {post.commentCount} yorum
          </SmallLink>
          |
          <fetcher.Form method="post" action="/addToCollections">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Ekle</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Koleksiyona ekle</DialogTitle>
                <DialogDescription>
                  Postu eklemek istediğin koleksiyonu seç
                </DialogDescription>
                <GappedBox css={{ flexDirection: "column" }}>
                  <SelectComponent
                    label="Koleksiyonlar"
                    options={[
                      { value: "javascript", text: "Javascript" },
                      { value: "java", text: "Java" },
                      { value: "typescript", text: "Typescript" },
                    ]}
                  />
                </GappedBox>
                <GappedBox css={{ marginTop: 10, gap: 10 }}>
                  <DialogClose asChild>
                    <Button type="submit" aria-label="Close">
                      Ekle
                    </Button>
                  </DialogClose>
                </GappedBox>
              </DialogContent>
            </Dialog>
          </fetcher.Form>
        </GappedBox>
      </GappedBox>
    </GappedBox>
  );
};
