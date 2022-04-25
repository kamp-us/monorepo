import { styled } from "~/stitches.config";

export const Input = styled("input", {
  background: "$gray3",
  color: "$gray12",
  height: "auto",
  border: "1px solid $gray6",
  fontSize: "$3",
  padding: 5,
  "&:hover": {
    backgroundColor: "$gray4",
  },
  "&:focus": {
    outline: "2px solid $amber6",
    backgroundColor: "$gray5",
  },
});
