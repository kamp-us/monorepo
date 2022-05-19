import { Auth } from "aws-amplify";
import { FC } from "react";
import { useUserContext } from "~/features/auth/user-context";
import {
  Box,
  Button,
  CenteredContainer,
  Form,
  GappedBox,
  Link,
  ThemeToggle,
} from "~/ui-library";

export const Topnav: FC = () => {
  const user = useUserContext();

  const onLogout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await Auth.signOut();
    location.reload();
  };

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
                <StyledLink to="/settings">Hesap</StyledLink>
                <Form onSubmit={onLogout}>
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
