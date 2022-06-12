import { FC } from "react";
import { styled } from "~/stitches.config";
import { Box, Button, Link } from "~/ui-library";

const SkipToBox = styled(Box, {
  width: 0,
  display: "flex",
  overflow: "hidden",

  "&:focus-within": {
    width: "100%",
  },
});

export const SkipToButton: FC = () => {
  return (
    <SkipToBox as="div">
      <Button as={Link} to="#main-content">
        Skip to content
      </Button>
    </SkipToBox>
  );
};
