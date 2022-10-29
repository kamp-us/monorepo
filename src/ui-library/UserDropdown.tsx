import { useSubmit } from "@remix-run/react";
import type { FC } from "react";
import { styled } from "~/stitches.config";
import {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./Dropdown";
import { Link } from "./Link";
import { UserAvatar } from "./UserAvatar";
import { Button } from "./layout-components/Button";

const MenuItem = styled(DropdownMenuItem, {
  width: "auto",
  cursor: "pointer",
});

const MenuLink = styled(Link, {
  textDecoration: "none",
});

export const UserDropdown: FC<{ login: string; userId: string }> = ({
  login,
  userId,
}) => {
  const submit = useSubmit();
  console.log("userDropDown", userId);
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
        <MenuLink to={`/profile/${userId}`}>
          <MenuItem>Profil</MenuItem>
        </MenuLink>
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
