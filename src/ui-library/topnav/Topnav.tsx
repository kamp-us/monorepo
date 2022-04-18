import { Auth } from "aws-amplify";
import { FC } from "react";
import { useUserContext } from "../../features/auth/user-context";
import { Box } from "../layout-components/Box";
import { CenteredContainer } from "../layout-components/CenteredContainer";
import { Link } from "../Link";
import { ThemeToggle } from "../ThemeToggle";
import { GappedBox } from "../GappedBox";
import { Button } from "~/ui-library/layout-components/Button";
import { Form } from "@remix-run/react";

export const Topnav: FC = () => {
  const user = useUserContext();
  return (
    <Box css={{ backgroundColor: "$gray2" }}>
      <CenteredContainer>
        <GappedBox css={{ padding: "10px 0", alignItems: "center" }}>
          <StyledLink to="/">
            <GappedBox css={{ alignItems: "center" }}>pano</GappedBox>
          </StyledLink>
          <Spacer />
          <Box css={{ display: "flex", gap: 10, alignItems: "center" }}>
            <ThemeToggle />
            {user ? (
              <>
                <StyledLink to="/send">Yeni Gönderi</StyledLink>
                <Form method="post" action="/logout">
                  <Button type="submit" color="transparent">
                    Çıkış
                  </Button>
                </Form>
              </>
            ) : (
              <>
                <StyledLink to="/login">Giriş</StyledLink>
              </>
            )}
          </Box>
        </GappedBox>
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
