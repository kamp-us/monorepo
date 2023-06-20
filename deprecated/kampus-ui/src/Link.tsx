import { Link as RouterLink } from "@remix-run/react";
import { styled } from "~/stitches.config";

export const Link = styled(RouterLink, {
  color: "$gray11",

  "&:hover": {
    color: "$amber11",
  },
});
