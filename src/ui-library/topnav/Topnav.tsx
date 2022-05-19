import { FC } from "react";
import { useUserContext } from "~/features/auth/user-context";
import {
  Box,
  CenteredContainer,
  GappedBox,
  Link,
  ThemeToggle,
} from "~/ui-library";
import { UserDropdown } from "../UserDropdown";

export const Topnav: FC = () => {
  const user = useUserContext();

  return (
    <Box css={{ backgroundColor: "$gray2" }}>
      <CenteredContainer>
        <GappedBox css={{ padding: "10px 0", alignItems: "center" }}>
          <Link prefetch="intent" to="/">
            <GappedBox css={{ alignItems: "center" }}>pano</GappedBox>
          </Link>
          <Spacer />
          <Box css={{ display: "flex", gap: 10, alignItems: "center" }}>
            {user ? (
              <>
                <Link to="/send">Yeni Gönderi</Link>
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
