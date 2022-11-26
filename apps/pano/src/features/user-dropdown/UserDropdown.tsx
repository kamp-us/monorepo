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
import type { FC } from "react";

const MenuItem = styled(DropdownMenuItem, {
  width: "auto",
  cursor: "pointer",
});

const MenuLink = styled(Link, {
  textDecoration: "none",
});

export const UserDropdown: FC<{ login: string }> = ({ login }) => {
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
        <form
          method="post"
          action="http://pasaport.kampus.local:5080/api/auth/logout?redirectTo=http://pano.kampus.local:4080"
        >
          <MenuItem
            as="input"
            type="submit"
            value="Çıkış"
            css={{ width: "100%" }}
          />
        </form>
        <DropdownMenuArrow offset={12} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
