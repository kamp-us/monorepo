import {
  Box,
  CenteredContainer,
  GappedBox,
  Link,
  ThemeToggle,
} from "@kampus/ui";
import type { FC } from "react";

export const Topnav: FC = () => {
  return (
    <Box css={{ px: "$2", backgroundColor: "$gray2" }}>
      <CenteredContainer>
        <GappedBox as="nav" css={{ padding: "$2 0", alignItems: "center" }}>
          <Link prefetch="intent" to="/">
            <GappedBox css={{ alignItems: "center" }}>kariyer</GappedBox>
          </Link>
          <Box css={{ px: 10, flex: 1 }}></Box>
          <Box css={{ display: "flex", gap: 10, alignItems: "center" }}>
            <ThemeToggle />
          </Box>
        </GappedBox>
      </CenteredContainer>
    </Box>
  );
};
