import { FC } from "react";
import { Button } from "./layout-components/Button";
import { UserAvatar } from "./UserAvatar";
import {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./Dropdown";
import { styled } from "~/stitches.config";
import { Auth } from "aws-amplify";
import { Link } from "./Link";

const MenuItem = styled(DropdownMenuItem, {
  width: "auto",
  cursor: "pointer",
});

const MenuLink = styled(Link, {
  textDecoration: "none",
});

export const UserDropdown: FC<{ login: string }> = ({ login }) => {
  const onLogout = async () => {
    await Auth.signOut();
    location.reload();
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
