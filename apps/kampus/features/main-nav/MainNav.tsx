"use client";

import { type PropsWithChildren, type ReactNode } from "react";
import NextLink from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Box, Button, Container, Flex, Text } from "@radix-ui/themes";

interface Props {
  brand: ReactNode;
  links?: ReactNode;
}

const Spacer = () => <Flex grow="1" />;

const TopNav = ({ children }: PropsWithChildren) => (
  <Box
    asChild
    position="sticky"
    width="100%"
    top="0"
    style={{
      zIndex: 40,
      backgroundColor: "var(--color-background)",
      boxShadow: "0 1px var(--gray-a4)",
    }}
  >
    <header>
      <Container size="3">
        <Flex height="9" align="center" justify="center" grow="1" gap="6">
          {children}
        </Flex>
      </Container>
    </header>
  </Box>
);

export const MainNav = (props: Props) => {
  return (
    <TopNav>
      {props.brand}
      {props.links && <nav className="flex gap-6">{props.links}</nav>}
      <Spacer />

      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </TopNav>
  );
};

export const MainNavBrand = ({ children, href }: PropsWithChildren<{ href?: string }>) => {
  return (
    <Flex asChild align="center" gap="2">
      <NextLink href={href || "/"}>
        <Text weight="bold" size="4">
          {children}
        </Text>
      </NextLink>
    </Flex>
  );
};

export const MainNavLink = ({ href, children }: PropsWithChildren<{ href: string }>) => {
  return (
    <Flex asChild align="center">
      <Button asChild variant="soft" size="2">
        <NextLink href={href}>{children}</NextLink>
      </Button>
    </Flex>
  );
};
