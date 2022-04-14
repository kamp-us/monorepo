import { styled } from "../stitches.config";

export const ExternalLink = styled("a", {
  color: "$blue9",
  fontWeight: "bold",
  "&:hover": {
    textDecoration: "none",
  },
});
