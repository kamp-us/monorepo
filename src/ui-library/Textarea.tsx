import { styled } from "~/stitches.config";

export const Textarea = styled("textarea", {
  background: "$gray3",
  color: "$gray12",
  height: "auto",
  border: "1px solid $gray6",
  fontFamily: "$inter",
  resize: "vertical",
  minHeight: "80px",
  padding: 5,
  "&:focus": {
    outline: "2px solid $amber6",
  },
});
