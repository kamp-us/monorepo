import {
  gray,
  blue,
  red,
  green,
  purple,
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
  },
});

export const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...purpleDark,
  },
});
