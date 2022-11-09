import { styled } from "~/stitches.config";

export const OldButton = styled("button", {
  backgroundColor: "$gray3",
  color: "$gray12",
  borderRadius: 5,
  fontSize: "13px",
  border: "0",
  padding: "5px 10px",
  cursor: "pointer",
  fontWeight: 600,

  "&:hover": {
    backgroundColor: "$gray4",
    color: "$amber11",
  },

  "&:active": {
    backgroundColor: "$gray5",
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

export const Button = styled("button", {
  // Reset
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  // Custom reset?
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  // Custom
  height: "$5",
  px: "$2",
  fontFamily: "$inter",
  fontSize: "$2",
  fontWeight: 500,
  fontVariantNumeric: "tabular-nums",

  "&:disabled": {
    backgroundColor: "$gray2",
    boxShadow: "inset 0 0 0 1px $colors$gray7",
    color: "$gray8",
    pointerEvents: "none",
  },

  variants: {
    size: {
      "1": {
        borderRadius: "$1",
        height: "$5",
        px: "$2",
        fontSize: "$1",
        lineHeight: "$sizes$5",
      },
      "2": {
        borderRadius: "$2",
        height: "$6",
        px: "$3",
        fontSize: "$3",
        lineHeight: "$sizes$6",
      },
      "3": {
        borderRadius: "$2",
        height: "$7",
        px: "$4",
        fontSize: "$4",
        lineHeight: "$sizes$7",
      },
    },
    variant: {
      gray: {
        backgroundColor: "$loContrast",
        boxShadow: "inset 0 0 0 1px $colors$gray7",
        color: "$hiContrast",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$gray8",
          },
        },
        "&:active": {
          backgroundColor: "$gray2",
          boxShadow: "inset 0 0 0 1px $colors$gray8",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$gray8, 0 0 0 1px $colors$gray8",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$gray4",
            boxShadow: "inset 0 0 0 1px $colors$gray8",
          },
      },
      blue: {
        backgroundColor: "$blue2",
        boxShadow: "inset 0 0 0 1px $colors$blue7",
        color: "$blue11",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$blue8",
          },
        },
        "&:active": {
          backgroundColor: "$blue3",
          boxShadow: "inset 0 0 0 1px $colors$blue8",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$blue4",
            boxShadow: "inset 0 0 0 1px $colors$blue8",
          },
      },
      green: {
        backgroundColor: "$green2",
        boxShadow: "inset 0 0 0 1px $colors$green7",
        color: "$green11",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$green8",
          },
        },
        "&:active": {
          backgroundColor: "$green3",
          boxShadow: "inset 0 0 0 1px $colors$green8",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$green8, 0 0 0 1px $colors$green8",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$green4",
            boxShadow: "inset 0 0 0 1px $colors$green8",
          },
      },
      red: {
        backgroundColor: "$loContrast",
        boxShadow: "inset 0 0 0 1px $colors$gray7",
        color: "$red11",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$gray8",
          },
        },
        "&:active": {
          backgroundColor: "$red3",
          boxShadow: "inset 0 0 0 1px $colors$red8",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$red8, 0 0 0 1px $colors$red8",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$red4",
            boxShadow: "inset 0 0 0 1px $colors$red8",
          },
      },
      transparentWhite: {
        backgroundColor: "hsla(0,100%,100%,.2)",
        color: "white",
        "@hover": {
          "&:hover": {
            backgroundColor: "hsla(0,100%,100%,.25)",
          },
        },
        "&:active": {
          backgroundColor: "hsla(0,100%,100%,.3)",
        },
        "&:focus": {
          boxShadow:
            "inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)",
        },
      },
      transparentBlack: {
        backgroundColor: "hsla(0,0%,0%,.2)",
        color: "black",
        "@hover": {
          "&:hover": {
            backgroundColor: "hsla(0,0%,0%,.25)",
          },
        },
        "&:active": {
          backgroundColor: "hsla(0,0%,0%,.3)",
        },
        "&:focus": {
          boxShadow:
            "inset 0 0 0 1px hsla(0,0%,0%,.35), 0 0 0 1px hsla(0,0%,0%,.35)",
        },
      },
    },
    state: {
      active: {
        backgroundColor: "$gray4",
        boxShadow: "inset 0 0 0 1px $colors$gray8",
        color: "$gray11",
        "@hover": {
          "&:hover": {
            backgroundColor: "$gray5",
            boxShadow: "inset 0 0 0 1px $colors$gray8",
          },
        },
        "&:active": {
          backgroundColor: "$gray5",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$gray8, 0 0 0 1px $colors$gray8",
        },
      },
      waiting: {
        backgroundColor: "$gray4",
        boxShadow: "inset 0 0 0 1px $colors$gray8",
        color: "transparent",
        pointerEvents: "none",
        "@hover": {
          "&:hover": {
            backgroundColor: "$gray5",
            boxShadow: "inset 0 0 0 1px $colors$gray8",
          },
        },
        "&:active": {
          backgroundColor: "$gray5",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$gray8",
        },
      },
    },
    ghost: {
      true: {
        backgroundColor: "transparent",
        boxShadow: "none",
      },
    },
  },
  compoundVariants: [
    {
      variant: "gray",
      ghost: "true",
      css: {
        backgroundColor: "transparent",
        color: "$hiContrast",
        "@hover": {
          "&:hover": {
            backgroundColor: "$grayA3",
            boxShadow: "none",
          },
        },
        "&:active": {
          backgroundColor: "$grayA4",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$grayA8, 0 0 0 1px $colors$grayA8",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$grayA4",
            boxShadow: "none",
          },
      },
    },
    {
      variant: "blue",
      ghost: "true",
      css: {
        backgroundColor: "transparent",
        "@hover": {
          "&:hover": {
            backgroundColor: "$amber3",
            boxShadow: "none",
          },
        },
        "&:active": {
          backgroundColor: "$amber4",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$amber8, 0 0 0 1px $colors$amber8",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$amber4",
            boxShadow: "none",
          },
      },
    },
    {
      variant: "green",
      ghost: "true",
      css: {
        backgroundColor: "transparent",
        "@hover": {
          "&:hover": {
            backgroundColor: "$greenA3",
            boxShadow: "none",
          },
        },
        "&:active": {
          backgroundColor: "$greenA4",
        },
        "&:focus": {
          boxShadow:
            "inset 0 0 0 1px $colors$greenA8, 0 0 0 1px $colors$greenA8",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$greenA4",
            boxShadow: "none",
          },
      },
    },
    {
      variant: "red",
      ghost: "true",
      css: {
        backgroundColor: "transparent",
        "@hover": {
          "&:hover": {
            backgroundColor: "$redA3",
            boxShadow: "none",
          },
        },
        "&:active": {
          backgroundColor: "$redA4",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$redA8, 0 0 0 1px $colors$redA8",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$redA4",
            boxShadow: "none",
          },
      },
    },
  ],
  defaultVariants: {
    size: "1",
    variant: "gray",
  },
});
