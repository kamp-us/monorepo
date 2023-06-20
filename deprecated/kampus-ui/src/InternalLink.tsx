import { Link as RouterLink } from "@remix-run/react";
import { styled } from "~/stitches.config";

export const InternalLink = styled(RouterLink, {
  color: "$gray12",
  fontWeight: "bold",
  "&:hover": {
    textDecoration: "none",
  },
});
