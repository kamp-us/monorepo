import { Box } from "./layout-components/Box";
import { styled } from "~/stitches.config";

export const GappedBox = styled(Box, {
  display: "flex",
  gap: 5,
});
