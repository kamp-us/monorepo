import { type PropsWithChildren } from "react";
import { Container, Link, Theme } from "@radix-ui/themes";

import { MainNav, MainNavBrand } from "~/features/main-nav";

export default function OdinRootLayout({ children }: PropsWithChildren) {
  return (
    <Theme accentColor="teal">
      <MainNav
        brand={<MainNavBrand href="/odin">Turkce Odin Project</MainNavBrand>}
        links={[
          <Link key={1} href="/sozluk">
            sozluk
          </Link>,
          <Link key={2} href="/pano">
            pano
          </Link>,
        ]}
      />
      <Container size="3" mt="3" mb="3">
        {children}
      </Container>
    </Theme>
  );
}
