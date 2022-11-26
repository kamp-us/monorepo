import {
  Box,
  CenteredContainer,
  ExternalLink,
  GappedBox,
  IconButton,
  Link,
  ThemeToggle,
} from "@kampus/ui";
import { PlusIcon } from "@radix-ui/react-icons";
import type { FC } from "react";
import { useUserContext } from "~/features/auth/user-context";
import { UserDropdown } from "~/features/user-dropdown/UserDropdown";
import { SearchInput } from "./SearchInput";

export const Topnav: FC = () => {
  const user = useUserContext();

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
                <ThemeToggle />
                <UserDropdown login={user.username} />
              </>
            ) : (
              <>
                <ThemeToggle />
                <ExternalLink
                  target="_self"
                  href="http://pasaport.kampus.local:5080/login?redirectTo=http://pano.kampus.local:4080"
                >
                  Giriş
                </ExternalLink>
              </>
            )}
          </Box>
        </GappedBox>
      </CenteredContainer>
    </Box>
  );
};
