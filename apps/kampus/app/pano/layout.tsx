import { PlusIcon } from "@radix-ui/react-icons";
import { Container, Theme } from "@radix-ui/themes";

import { MainNav, MainNavBrand, MainNavLink } from "~/features/main-nav";

export default function PanoLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <Theme accentColor="amber">
      <MainNav
        brand={<MainNavBrand href="/pano">pano</MainNavBrand>}
        links={
          <>
            <MainNavLink href="/pano/post/create">
              <PlusIcon />
              ekle
            </MainNavLink>
          </>
        }
      />
      <Container size="3" mt="3" mb="3">
        {children}
        {modal}
      </Container>
    </Theme>
  );
}
