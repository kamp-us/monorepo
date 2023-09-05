"use client";

import { type PropsWithChildren, type ReactNode } from "react";
import Link from "next/link";
import { graphql, usePreloadedQuery } from "react-relay";

import { ThemeToggle, TopNav, TopNavBrand, TopNavItem } from "@kampus/ui";
import { cn } from "@kampus/ui/utils";
import { type SerializablePreloadedQuery } from "@kampus/relay";
import useSerializablePreloadedQuery from "@kampus/relay/use-serializable-preloaded-query";

import { UserAvatar } from "../user-avatar/UserAvatar";
import { type MainNavQuery } from "./__generated__/MainNavQuery.graphql";

const query = graphql`
  query MainNavQuery {
    viewer {
      actor {
        ...UserAvatar_user
      }
    }
  }
`;

interface Props {
  preloadedQuery: SerializablePreloadedQuery<MainNavQuery>;
  brand: ReactNode;
  links?: ReactNode;
  actions?: ReactNode;
}

export const MainNav = (props: Props) => {
  const queryRef = useSerializablePreloadedQuery(props.preloadedQuery);
  const data = usePreloadedQuery(query, queryRef);

  return (
    <TopNav>
      {props.brand}
      <nav className="flex flex-1">{props.links}</nav>
      <div className="flex items-center gap-4 px-4">
        {props.actions}
        <ThemeToggle />
        <UserAvatar user={data.viewer?.actor ?? null} />
      </div>
    </TopNav>
  );
};

export const MainNavBrand = ({
  className,
  href,
}: PropsWithChildren<{ href?: string; className?: string }>) => {
  return (
    <TopNavBrand className={cn(className, "flex px-4")} asChild>
      <Link href={href || "/"}>kamp.us</Link>
    </TopNavBrand>
  );
};

export const MainNavLink = ({
  disabled,
  href,
  children,
}: PropsWithChildren<{ href: string; disabled?: boolean }>) => {
  return (
    <TopNavItem asChild>
      <Link href={href} className={cn(!!disabled && "cursor-not-allowed opacity-80")}>
        {children}
      </Link>
    </TopNavItem>
  );
};
