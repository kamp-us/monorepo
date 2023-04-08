import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  IconButton,
  Link,
  styled,
} from "@kampus/ui";
import { BellIcon } from "@radix-ui/react-icons";
import { useFetcher } from "@remix-run/react";
import type { FC } from "react";
import { Fragment, useEffect, useState } from "react";
import type { MyNotification } from "~/models/notification.server";

const MenuContent = styled(DropdownMenuContent, {
  maxWidth: "$9",
});

const MenuItem = styled(DropdownMenuItem, {
  height: "auto",
  padding: "$2",
  cursor: "pointer",
});

const MenuLink = styled(Link, {
  textDecoration: "none",
});

const MenuIconButton = styled(IconButton, {
  padding: 0,
  borderRadius: "50%",
  position: "relative",
});

const MenuIconChip = styled("div", {
  borderRadius: "50%",
  width: "$2",
  height: "$2",
  backgroundColor: "$amber9",
  position: "absolute",
  top: "0",
  right: "0",
});

interface Props {}

export const NotificationDropdown: FC<Props> = (props) => {
  const fetcher = useFetcher();
  const [processedNotifications, setProcessedNotifications] = useState<
    string[]
  >([]);
  const [haveUnread, setHaveUnread] = useState(false);

  const handleReadAll = () => {
    fetcher.submit(
      {},
      { method: "put", action: "/notifications/my-notifications" }
    );
  };

  const handleReadSingle = (id: string) => {
    fetcher.submit(
      {},
      { method: "put", action: `/notifications/my-notifications/${id}` }
    );
  };

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data == null) {
      fetcher.load("/notifications/my-notifications");
    }
  }, [fetcher]);

  useEffect(() => {
    const messageArray: string[] = [];
    setHaveUnread(false);
    if (fetcher.data) {
      (fetcher.data.notifications as MyNotification[])?.forEach((notif) => {
        // process fetcher data into meaningful messages
        switch (notif.type) {
          case "REPLY":
            if (notif.comment)
              messageArray.push(
                `${
                  notif.triggeredBy.username
                } isimli kullanıcı şu yorumunuzu yanıtladı: "${notif.comment.content.substring(
                  0,
                  30
                )}..."`
              );
            break;
          case "COMMENT":
            if (notif.post)
              messageArray.push(
                `${notif.triggeredBy.username} isimli kullanıcı "${notif.post.title}" paylaşımınıza bir yorum yaptı.`
              );
            break;
          case "UPVOTEPOST":
            if (notif.post)
              messageArray.push(
                `${notif.triggeredBy.username} isimli kullanıcı "${notif.post.title}" paylaşımınızı beğendi.`
              );
            break;
          case "UPVOTECOMMENT":
            if (notif.comment)
              messageArray.push(
                `${
                  notif.triggeredBy.username
                } isimli kullanıcı şu yorumunuzu beğendi: "${notif.comment.content.substring(
                  0,
                  30
                )}"`
              );
            break;
        }

        // check if any unread
        if (!notif.read) setHaveUnread(true);
      });
      setProcessedNotifications(messageArray);
    }
  }, [fetcher.data]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MenuIconButton>
          {haveUnread && <MenuIconChip />}
          <BellIcon />
        </MenuIconButton>
      </DropdownMenuTrigger>

      <MenuContent sideOffset={10}>
        <MenuItem onClick={() => handleReadAll()}>
          Hepsini okundu olarak işaretle
        </MenuItem>
        <DropdownMenuSeparator />
        {processedNotifications &&
          fetcher.data?.notifications?.map(
            (notif: MyNotification, index: number) => (
              <Fragment key={notif.id}>
                <MenuLink
                  to={notif.url}
                  onClick={() => {
                    handleReadSingle(notif.id);
                  }}
                  state={{ targetHash: notif.comment?.id }}
                >
                  <MenuItem
                    className={!notif.read ? "unread" : ""}
                    css={{
                      "&.unread:not(:hover)": {
                        backgroundColor: "$amber4",
                      },
                    }}
                  >
                    {processedNotifications[index]}
                  </MenuItem>
                </MenuLink>
              </Fragment>
            )
          )}
      </MenuContent>
    </DropdownMenu>
  );
};
