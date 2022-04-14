import { Link as RouterLink } from "react-router-dom";
import { styled } from "../stitches.config";

export const Link = styled(RouterLink, {
  color: "$gray11",

  "&:hover": {
    color: "$gray12",
  },
});
