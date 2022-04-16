import { styled } from "../../stitches.config";

export const Button = styled("button", {
  backgroundColor: "$gray3",
  color: "$gray12",
  borderRadius: 5,
  fontSize: "13px",
  border: "0",
  padding: "5px 10px",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$gray4",
  },

  variants: {
    color: {
      transparent: {
        backgroundColor: "transparent",
        border: "none",
      },
    },
  },
});
