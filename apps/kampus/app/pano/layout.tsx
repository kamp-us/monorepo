import Link from "next/link";
import { Plus } from "lucide-react";

import { Button } from "@kampus/ui";
import loadSerializableQuery from "@kampus/relay/load-serializable-query";

import { getKampusURL } from "~/features/kampus-url/get-kampus-url";
import { MainNav, MainNavBrand, MainNavLink } from "~/features/main-nav";
import query, { type MainNavQuery } from "~/features/main-nav/__generated__/MainNavQuery.graphql";

export default async function PanoLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const preloadedQuery = await loadSerializableQuery<MainNavQuery>(query, {});

  return (
    <>
      <MainNav
        preloadedQuery={preloadedQuery}
        brand={<MainNavBrand>pano.kamp.us</MainNavBrand>}
        links={
          <>
            <MainNavLink href={getKampusURL("pano")}>pano</MainNavLink>
            <MainNavLink href={getKampusURL("sozluk")}>sozluk</MainNavLink>
          </>
        }
        actions={
          <>
            <Button variant="outline" size="icon" asChild>
              <Link href="post/create">
                <Plus />
              </Link>
            </Button>
          </>
        }
      />
      <section
        aria-label="PanoLayout"
        role="contentinfo"
        className="container mx-auto max-w-3xl py-10"
      >
        {children}
      </section>
      {modal}
    </>
  );
}
