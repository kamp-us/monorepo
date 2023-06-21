import { type PropsWithChildren } from "react";
import { MainNav, MainNavBrand, MainNavLink } from "~/features/main-nav";

export default function SozlukRootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <MainNav
        brand={<MainNavBrand>sozluk</MainNavBrand>}
        links={
          <>
            <MainNavLink href="/deployment">deployment</MainNavLink>
            <MainNavLink href="/senchabot">senchabot</MainNavLink>
          </>
        }
      />
      {children}
    </>
  );
}
