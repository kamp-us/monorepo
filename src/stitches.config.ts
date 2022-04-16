import {
  amber,
  gray,
  blue,
  red,
  green,
  purple,
  amberDark,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  purpleDark,
} from "@radix-ui/colors";

// Spread the scales in your light and dark themes
import { createStitches } from "@stitches/react";

export const { styled, createTheme } = createStitches({
  theme: {
    colors: {
      ...amber,
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...purple,
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "14px",
      4: "15px",
      5: "16px",
    },
    fonts: {
      inter: "Inter, sans-serif",
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    ...amberDark,
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...purpleDark,
  },
});
