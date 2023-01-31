import {
  Box,
  CenteredContainer,
  GappedBox,
  IconButton,
  Link,
  ThemeToggle,
} from "@kampus/ui";
import { PlusIcon } from "@radix-ui/react-icons";
import type { FC } from "react";
import { SearchInput } from "./SearchInput";
import { useUserContext } from "~/features/auth/user-context";
import { UserDropdown } from "~/features/user-dropdown/UserDropdown";

export const Topnav: FC = () => {
  const user = useUserContext();

  return (
    <Box css={{ px: "$2", backgroundColor: "$gray2" }}>
      <CenteredContainer>
        <GappedBox as="nav" css={{ padding: "$2 0", alignItems: "center", justifyContent: "space-between" }}>
          <Link prefetch="intent" to="/">
            <GappedBox css={{ alignItems: "center" }}>kamp.us</GappedBox>
          </Link>
          <Box css={{ display: "flex", gap: 10, alignItems: "center" }}>
            <ThemeToggle />
          </Box>
        </GappedBox>
      </CenteredContainer>
    </Box>
  );
};
