import {
  Box,
  CenteredContainer,
  GappedBox,
  Link,
} from "@kampus/ui";
import type { FC } from "react";

export const Topnav: FC = () => {
  console.log('topnav')
  return (
    <Box css={{ px: "$2", backgroundColor: "$gray2" }}>
      <CenteredContainer>
        <Box as="nav" css={{ padding: "$2 0", alignItems: "center" }}>
          <Link prefetch="intent" to="/">
            <GappedBox css={{ alignItems: "center" }}>kamp.us</GappedBox>
          </Link>
        </Box>
      </CenteredContainer>
    </Box>
  );
};
