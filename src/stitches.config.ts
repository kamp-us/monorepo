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
  blackA,
  grayA,
  grayDarkA,
  blueA,
  blueDarkA,
  greenDarkA,
  greenA,
} from "@radix-ui/colors";

import type * as Stitches from "@stitches/react";
// Spread the scales in your light and dark themes
import { createStitches } from "@stitches/react";

export const { styled, createTheme, getCssText, config, keyframes } =
  createStitches({
    theme: {
      colors: {
        ...amber,
        ...gray,
        ...blue,
        ...red,
        ...green,
        ...purple,
        ...blackA,
        ...grayA,
        ...blueA,
        ...greenA,

        hiContrast: "$gray12",
        loContrast: "$gray1",

        canvas: "hsl(0 0% 93%)",
        panel: "white",
        transparentPanel: "hsl(0 0% 0% / 97%)",
        shadowLight: "hsl(206 22% 7% / 35%)",
        shadowDark: "hsl(206 22% 7% / 20%)",
      },
      fontSizes: {
        1: "12px",
        2: "13px",
        3: "14px",
        4: "15px",
        5: "16px",
      },
      sizes: {
        1: "5px",
        2: "10px",
        3: "15px",
        4: "20px",
        5: "25px",
        6: "35px",
        7: "45px",
        8: "65px",
        9: "80px",
      },
      space: {
        1: "5px",
        2: "10px",
        3: "15px",
        4: "20px",
        5: "25px",
        6: "35px",
        7: "45px",
        8: "65px",
        9: "80px",
      },
      radii: {
        1: "4px",
        2: "6px",
        3: "8px",
        4: "12px",
        round: "50%",
        pill: "9999px",
      },
      fonts: {
        inter: "Inter, sans-serif",
      },
    },
    utils: {
      paddingX: (value: number) => ({
        paddingRight: value,
        paddingLeft: value,
      }),
      p: (value: Stitches.PropertyValue<"padding">) => ({
        padding: value,
      }),
      pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
        paddingTop: value,
      }),
      pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
        paddingRight: value,
      }),
      pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
        paddingBottom: value,
      }),
      pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
        paddingLeft: value,
      }),
      px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<"paddingTop">) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      m: (value: Stitches.PropertyValue<"margin">) => ({
        margin: value,
      }),
      mt: (value: Stitches.PropertyValue<"marginTop">) => ({
        marginTop: value,
      }),
      mr: (value: Stitches.PropertyValue<"marginRight">) => ({
        marginRight: value,
      }),
      mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
        marginBottom: value,
      }),
      ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
        marginLeft: value,
      }),
      mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<"marginTop">) => ({
        marginTop: value,
        marginBottom: value,
      }),

      ta: (value: Stitches.PropertyValue<"textAlign">) => ({
        textAlign: value,
      }),

      fd: (value: Stitches.PropertyValue<"flexDirection">) => ({
        flexDirection: value,
      }),
      fw: (value: Stitches.PropertyValue<"flexWrap">) => ({ flexWrap: value }),

      ai: (value: Stitches.PropertyValue<"alignItems">) => ({
        alignItems: value,
      }),
      ac: (value: Stitches.PropertyValue<"alignContent">) => ({
        alignContent: value,
      }),
      jc: (value: Stitches.PropertyValue<"justifyContent">) => ({
        justifyContent: value,
      }),
      as: (value: Stitches.PropertyValue<"alignSelf">) => ({
        alignSelf: value,
      }),
      fg: (value: Stitches.PropertyValue<"flexGrow">) => ({ flexGrow: value }),
      fs: (value: Stitches.PropertyValue<"flexShrink">) => ({
        flexShrink: value,
      }),
      fb: (value: Stitches.PropertyValue<"flexBasis">) => ({
        flexBasis: value,
      }),

      bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
        backgroundColor: value,
      }),

      br: (value: Stitches.PropertyValue<"borderRadius">) => ({
        borderRadius: value,
      }),
      btrr: (value: Stitches.PropertyValue<"borderTopRightRadius">) => ({
        borderTopRightRadius: value,
      }),
      bbrr: (value: Stitches.PropertyValue<"borderBottomRightRadius">) => ({
        borderBottomRightRadius: value,
      }),
      bblr: (value: Stitches.PropertyValue<"borderBottomLeftRadius">) => ({
        borderBottomLeftRadius: value,
      }),
      btlr: (value: Stitches.PropertyValue<"borderTopLeftRadius">) => ({
        borderTopLeftRadius: value,
      }),

      bs: (value: Stitches.PropertyValue<"boxShadow">) => ({
        boxShadow: value,
      }),

      lh: (value: Stitches.PropertyValue<"lineHeight">) => ({
        lineHeight: value,
      }),

      ox: (value: Stitches.PropertyValue<"overflowX">) => ({
        overflowX: value,
      }),
      oy: (value: Stitches.PropertyValue<"overflowY">) => ({
        overflowY: value,
      }),

      pe: (value: Stitches.PropertyValue<"pointerEvents">) => ({
        pointerEvents: value,
      }),
      us: (value: Stitches.PropertyValue<"userSelect">) => ({
        WebkitUserSelect: value,
        userSelect: value,
      }),

      userSelect: (value: Stitches.PropertyValue<"userSelect">) => ({
        WebkitUserSelect: value,
        userSelect: value,
      }),

      size: (value: Stitches.PropertyValue<"width">) => ({
        width: value,
        height: value,
      }),

      appearance: (value: Stitches.PropertyValue<"appearance">) => ({
        WebkitAppearance: value,
        appearance: value,
      }),
      backgroundClip: (value: Stitches.PropertyValue<"backgroundClip">) => ({
        WebkitBackgroundClip: value,
        backgroundClip: value,
      }),
    },
  });

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme({
  colors: {
    ...amberDark,
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...purpleDark,
    ...grayDarkA,
    ...blueDarkA,
    ...greenDarkA,

    // Semantic colors
    hiContrast: "$gray12",
    loContrast: "$gray1",
    canvas: "hsl(0 0% 15%)",
    panel: "$gray3",
    transparentPanel: "hsl(0 100% 100% / 97%)",
    shadowLight: "hsl(206 22% 7% / 35%)",
    shadowDark: "hsl(206 22% 7% / 20%)",
  },
});
