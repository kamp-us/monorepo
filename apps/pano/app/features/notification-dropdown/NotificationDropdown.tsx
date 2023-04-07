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
import { PlusIcon } from "@radix-ui/react-icons";
import { useFetcher } from "@remix-run/react";
import { FC, Fragment, useEffect, useState } from "react";
import { MyNotification } from "~/models/notification.server";

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

interface Props {}

export const NotificationDropdown: FC<Props> = (props) => {
  const fetcher = useFetcher();
  const [processedNotifications, setProcessedNotifications] = useState<
    string[]
  >([]);

  const handleRead = () => {
    fetcher.submit(
      {},
      { method: "post", action: "/notifications/my-notifications" }
    );
  };

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data == null) {
      fetcher.load("/notifications/my-notifications");
    }
  }, [fetcher]);

  useEffect(() => {
    const messageArray: string[] = [];
    if (fetcher.data)
      (fetcher.data.notifications as MyNotification[]).forEach((notif) => {
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
        setProcessedNotifications(messageArray);
      });
  }, [fetcher.data]);

  return (
    <DropdownMenu>
      <fetcher.Form method="get" action="/notification/my-notifications">
        <DropdownMenuTrigger asChild>
          <IconButton
            color="transparent"
            css={{
              padding: 0,
              borderRadius: "50%",
              width: "auto",
              height: "auto",
            }}
          >
            <PlusIcon />
          </IconButton>
        </DropdownMenuTrigger>
      </fetcher.Form>

      <MenuContent sideOffset={10}>
        <MenuItem onClick={() => handleRead()}>
          Hepsini okundu olarak işaretle
        </MenuItem>
        <DropdownMenuSeparator />
        {processedNotifications &&
          fetcher.data?.notifications.map(
            (notif: MyNotification, index: number) => (
              <Fragment key={notif.id}>
                <MenuLink
                  to={notif.url}
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
