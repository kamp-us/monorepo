import {
  Button,
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  IconButton,
  Link,
  styled,
  UserAvatar,
} from "@kampus/ui";
import { Notification, User } from "@prisma/client";
import { PlusIcon } from "@radix-ui/react-icons";
import { useFetcher } from "@remix-run/react";
import { FC, Fragment, useEffect } from "react";

const MenuItem = styled(DropdownMenuItem, {
  width: "auto",
  cursor: "pointer",
});

const MenuLink = styled(Link, {
  textDecoration: "none",
});

interface Props {}

export const NotificationDropdown: FC<Props> = (props) => {
  const fetcher = useFetcher();

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data == null) {
      fetcher.load("/notifications/my-notifications");
    }
  }, [fetcher]);

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

      <DropdownMenuContent sideOffset={5}>
        {fetcher.data?.notifications.map((notif: Notification) => (
          <Fragment key={notif.id}>
            <MenuItem>{notif.type}</MenuItem>
            <DropdownMenuSeparator />
          </Fragment>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuArrow offset={12} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
