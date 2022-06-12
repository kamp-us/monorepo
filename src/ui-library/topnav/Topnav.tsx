import { PlusIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { useUserContext } from "~/features/auth/user-context";
import { SkipToButton } from "~/features/skip-to/components/skip-to-button";
import {
  Box,
  CenteredContainer,
  GappedBox,
  Link,
  ThemeToggle,
} from "~/ui-library";
import { IconButton } from "../IconButton";
import { UserDropdown } from "../UserDropdown";

export const Topnav: FC = () => {
  const user = useUserContext();

  return (
    <Box
      css={{ paddingX: 10, backgroundColor: "$gray2", position: "relative" }}
    >
      <Box css={{ position: "absolute" }}>
        <SkipToButton />
      </Box>
      <CenteredContainer>
        <GappedBox css={{ padding: "10px 0", alignItems: "center" }}>
          <Link prefetch="intent" to="/">
            <GappedBox css={{ alignItems: "center" }}>pano</GappedBox>
          </Link>
          <Spacer />
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
                <Link to="/login">Giriş</Link>
              </>
            )}
          </Box>
        </GappedBox>
      </CenteredContainer>
    </Box>
  );
};

const Spacer = () => <Box css={{ flex: "1" }} />;
