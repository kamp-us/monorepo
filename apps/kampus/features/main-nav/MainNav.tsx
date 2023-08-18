"use client";

import { type PropsWithChildren, type ReactNode } from "react";
import Link from "next/link";

import { TopNav, TopNavBrand, TopNavItem } from "@kampus/ui";
import { cn } from "@kampus/ui/utils";

interface Props {
  brand: ReactNode;
  links?: ReactNode;
}

export const MainNav = (props: Props) => {
  return (
    <TopNav>
      {props.brand}
      {props.links && <nav className="flex gap-6">{props.links}</nav>}
    </TopNav>
  );
};

export const MainNavBrand = ({ children, href }: PropsWithChildren<{ href?: string }>) => {
  return (
    <TopNavBrand asChild>
      <Link href={href || "/"}>{children}</Link>
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
