import { styled } from "../stitches.config";

export const Textarea = styled("textarea", {
  background: "$gray3",
  color: "$gray12",
  height: "auto",
  border: "1px solid $gray6",
  "&:focus": {
    outline: "2px solid $blue6",
  },
});
