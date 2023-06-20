import { styled } from "~/stitches.config";
import { Box } from "./layout-components/Box";

export const GappedBox = styled(Box, {
  display: "flex",
  gap: 5,
});
