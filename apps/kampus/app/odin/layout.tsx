import { type PropsWithChildren } from "react";

import { MainNav, MainNavBrand, MainNavLink } from "~/features/main-nav";

export default function OdinRootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <MainNav
        brand={<MainNavBrand>Turkce Odin Project</MainNavBrand>}
        links={
          <>
            <MainNavLink href="/sozluk">sozluk</MainNavLink>
            <MainNavLink href="/pano">pano</MainNavLink>
          </>
        }
      />
      <section
        aria-label="PanoLayout"
        role="contentinfo"
        className="bg-background container mx-auto max-w-5xl py-10"
      >
        {children}
      </section>
    </>
  );
}
