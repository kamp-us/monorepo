import { Box, CenteredContainer, GappedBox, IconButton, Link, ThemeToggle, useTheme } from "@kampus/ui";
import { PlusIcon } from "@radix-ui/react-icons";
import { useFetcher } from "@remix-run/react";
import type { FC } from "react";
import { SearchInput } from "./SearchInput";
import { NotificationDropdown } from "../notification-dropdown/NotificationDropdown";
import { useUserContext } from "~/features/auth/user-context";
import { UserDropdown } from "~/features/user-dropdown/UserDropdown";

export const Topnav: FC = () => {
  const user = useUserContext();
  const fetcher = useFetcher();
  const { theme } = useTheme();

  return (
    <Box css={{ px: "$2", backgroundColor: "$gray2" }}>
      <CenteredContainer>
        <GappedBox as="nav" css={{ padding: "$2 0", alignItems: "center" }}>
          <Link prefetch="intent" to="/">
            <GappedBox css={{ alignItems: "center" }}>pano</GappedBox>
          </Link>
          <Box css={{ px: 10, flex: 1 }}>
            <SearchInput />
          </Box>
          <Box css={{ display: "flex", gap: 10, alignItems: "center" }}>
            {user ? (
              <>
                <IconButton as={Link} to="/send">
                  <PlusIcon />
                </IconButton>
                <fetcher.Form method="post" action="/change-theme">
                  <input type="hidden" name="theme" value={theme.toUpperCase()} />
                  <ThemeToggle />
                </fetcher.Form>
                <NotificationDropdown />
                <UserDropdown login={user.username} />
              </>
            ) : (
              <>
                <ThemeToggle />
                <Link to="/login">Giriş</Link>
              </>
            )}
          </Box>
        </GappedBox>
      </CenteredContainer>
    </Box>
  );
};
