import { styled } from "@stitches/react";
import { Auth } from "aws-amplify";
import { FC } from "react";
import { useUserContext } from "../../features/auth/user-context";
import { Box } from "../layout-components/Box";
import { CenteredContainer } from "../layout-components/CenteredContainer";
import { Link } from "../Link";
import { ThemeToggle } from "../ThemeToggle";

export const Topnav: FC = () => {
  const user = useUserContext();
  return (
    <Box css={{ backgroundColor: "$gray2" }}>
      <CenteredContainer>
        <Box css={{ display: "flex", padding: "10px 0", alignItems: "center" }}>
          <StyledLink to="/">pano</StyledLink>
          <Spacer />
          <Box css={{ display: "flex", gap: 10, alignItems: "center" }}>
            <ThemeToggle />
            <StyledLink to="/send">Yeni Gönderi</StyledLink>
            {user && (
              <StyledLink to="#" onClick={() => Auth.signOut()}>
                Çıkış
              </StyledLink>
            )}
          </Box>
        </Box>
      </CenteredContainer>
    </Box>
  );
};

const Spacer = () => <Box css={{ flex: "1" }} />;

const StyledLink = Link;
//   color: "$gray12",
//   fontWeight: 500,
//   "&:hover": {
//     // textDecoration: "none",
//   },
// });
