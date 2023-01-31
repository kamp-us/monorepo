import {
  Button,
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Link,
  styled,
  UserAvatar,
} from "@kampus/ui";
import { useSubmit } from "@remix-run/react";
import type { FC } from "react";

const MenuItem = styled(DropdownMenuItem, {
  width: "auto",
  cursor: "pointer",
});

const MenuLink = styled(Link, {
  textDecoration: "none",
});

export const UserDropdown: FC<{ login: string }> = ({ login }) => {
  const submit = useSubmit();

  const onLogout = async () => {
    submit(null, { method: "post", action: "/api/auth/logout" });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          color="transparent"
          css={{ padding: 0, borderRadius: "9999px" }}
        >
          <UserAvatar login={login} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={5}>
        <MenuItem disabled>Profil</MenuItem>
        <MenuLink prefetch="intent" to="/settings">
          <MenuItem>Ayarlar</MenuItem>
        </MenuLink>
        <DropdownMenuSeparator />
        <MenuItem onClick={onLogout}>Çıkış</MenuItem>
        <DropdownMenuArrow offset={12} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
