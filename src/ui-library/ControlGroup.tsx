import { styled } from "~/stitches.config";
import { Input } from "./Input";
import { Button } from "./layout-components/Button";
import { Select } from "./Select";

export const ControlGroup = styled("div", {
  display: "flex",

  // Make sure ControlGroup and its children don't affect normal stacking order
  position: "relative",
  zIndex: 0,

  [`& ${Button}`]: {
    borderRadius: 0,
    boxShadow:
      "inset 0 1px $colors$gray7, inset -1px 0 $colors$gray7, inset 0 -1px $colors$gray7",
    "&:hover": {
      boxShadow:
        "-1px 0 $colors$gray8, inset 0 1px $colors$gray8, inset -1px 0 $colors$gray8, inset 0 -1px $colors$gray8",
    },
    "&:focus": {
      zIndex: 1,
      boxShadow: "inset 0 0 0 1px $colors$gray8, 0 0 0 1px $colors$gray8",
    },
    "&:first-child": {
      borderTopLeftRadius: "$1",
      borderBottomLeftRadius: "$1",
      boxShadow: "inset 0 0 0 1px $colors$gray7",
      "&:hover": {
        boxShadow: "inset 0 0 0 1px $colors$gray8",
      },
      "&:focus": {
        boxShadow: "inset 0 0 0 1px $colors$gray8, 0 0 0 1px $colors$gray8",
      },
    },
    "&:last-child": {
      borderTopRightRadius: "$1",
      borderBottomRightRadius: "$1",
      boxShadow:
        "inset 0 1px $colors$gray7, inset -1px 0 $colors$gray7, inset 0 -1px $colors$gray7",
      "&:focus": {
        boxShadow: "inset 0 0 0 1px $colors$gray8, 0 0 0 1px $colors$gray8",
      },
    },
  },
  [`& ${Input}`]: {
    borderRadius: 0,
    boxShadow:
      "inset 0 1px $colors$gray7, inset -1px 0 $colors$gray7, inset 0 -1px $colors$gray7",
    "&:focus": {
      zIndex: 1,
      boxShadow:
        "inset 0px 0px 0px 1px $colors$amber8, 0px 0px 0px 1px $colors$amber8",
    },
    "&:first-child": {
      borderTopLeftRadius: "$1",
      borderBottomLeftRadius: "$1",
      boxShadow: "inset 0 0 0 1px $colors$gray7",
      "&:focus": {
        boxShadow:
          "inset 0px 0px 0px 1px $colors$amber8, 0px 0px 0px 1px $colors$amber8",
      },
    },
    "&:last-child": {
      borderTopRightRadius: "$1",
      borderBottomRightRadius: "$1",
      boxShadow:
        "inset 0 1px $colors$gray7, inset -1px 0 $colors$gray7, inset 0 -1px $colors$gray7",
      "&:focus": {
        boxShadow:
          "inset 0px 0px 0px 1px $colors$amber8, 0px 0px 0px 1px $colors$amber8",
      },
    },
  },
  [`& ${Select}`]: {
    borderRadius: 0,
    boxShadow:
      "inset 0 1px $colors$gray7, inset -1px 0 $colors$gray7, inset 0 -1px $colors$gray7",
    "&:focus-within": {
      boxShadow:
        "inset 0px 0px 0px 1px $colors$amber8, 0px 0px 0px 1px $colors$amber8",
    },
    "&:first-child": {
      borderTopLeftRadius: "$1",
      borderBottomLeftRadius: "$1",
      boxShadow: "inset 0 0 0 1px $colors$gray7",
      "&:focus-within": {
        boxShadow:
          "inset 0px 0px 0px 1px $colors$amber8, 0px 0px 0px 1px $colors$amber8",
      },
    },
    "&:last-child": {
      borderTopRightRadius: "$1",
      borderBottomRightRadius: "$1",
      boxShadow:
        "inset 0 1px $colors$gray7, inset -1px 0 $colors$gray7, inset 0 -1px $colors$gray7",
      "&:focus-within": {
        boxShadow:
          "inset 0px 0px 0px 1px $colors$amber8, 0px 0px 0px 1px $colors$amber8",
      },
    },
  },
});
