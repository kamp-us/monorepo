import { styled } from "~/stitches.config";

export const CenteredContainer = styled("div", {
  maxWidth: 900,
  margin: "0 auto",
  px: "$2",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  boxSizing: "border-box",
});
