import { type PropsWithChildren } from "react";

import loadSerializableQuery from "@kampus/relay/load-serializable-query";

import { MainNav, MainNavBrand, MainNavLink } from "~/features/main-nav";
import query, { type MainNavQuery } from "~/features/main-nav/__generated__/MainNavQuery.graphql";

import "./sozluk.css";

import { getKampusURL } from "~/features/kampus-url/get-kampus-url";

export default async function SozlukRootLayout({ children }: PropsWithChildren) {
  const preloadedQuery = await loadSerializableQuery<MainNavQuery>(query, {});
  return (
    <>
      <MainNav
        preloadedQuery={preloadedQuery}
        brand={<MainNavBrand>sozluk.kamp.us</MainNavBrand>}
        links={
          <>
            <MainNavLink href={getKampusURL("pano")}>pano</MainNavLink>
            <MainNavLink href={getKampusURL("sozluk")}>sozluk</MainNavLink>
          </>
        }
      />
      {children}
    </>
  );
}
