import { styled } from "~/stitches.config";

export const Textarea = styled("textarea", {
  // Reset
  appearance: "none",
  borderWidth: "0",
  fontFamily: "inherit",
  margin: "0",
  outline: "none",
  padding: "$1",
  width: "100%",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  backgroundColor: "$loContrast",
  boxShadow: "inset 0 0 0 1px $colors$gray7",
  color: "$hiContrast",
  fontVariantNumeric: "tabular-nums",
  position: "relative",
  minHeight: 80,
  resize: "vertical",

  "&:focus": {
    boxShadow:
      "inset 0px 0px 0px 1px $colors$amber7, 0px 0px 0px 1px $colors$amber8",
    zIndex: "1",
  },
  "&::placeholder": {
    color: "$gray9",
  },
  "&:disabled": {
    pointerEvents: "none",
    backgroundColor: "$gray2",
    color: "$gray8",
    cursor: "not-allowed",
    resize: "none",
    "&::placeholder": {
      color: "$gray7",
    },
  },
  "&:read-only": {
    backgroundColor: "$gray2",
    "&:focus": {
      boxShadow: "inset 0px 0px 0px 1px $colors$gray7",
    },
  },

  variants: {
    size: {
      "1": {
        borderRadius: "$1",
        fontSize: "$1",
        lineHeight: "16px",
        px: "$1",
      },
      "2": {
        borderRadius: "$1",
        fontSize: "$2",
        lineHeight: "20px",
        px: "$1",
      },
      "3": {
        borderRadius: "$2",
        fontSize: "$3",
        lineHeight: "23px",
        px: "$2",
      },
    },
    state: {
      invalid: {
        boxShadow: "inset 0 0 0 1px $colors$red7",
        "&:focus": {
          boxShadow:
            "inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8",
        },
      },
      valid: {
        boxShadow: "inset 0 0 0 1px $colors$green7",
        "&:focus": {
          boxShadow:
            "inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8",
        },
      },
    },
    cursor: {
      default: {
        cursor: "default",
        "&:focus": {
          cursor: "text",
        },
      },
      text: {
        cursor: "text",
      },
    },
  },
  defaultVariants: {
    size: "1",
  },
});
