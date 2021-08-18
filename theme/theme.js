import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import globalStyles from "theme/GlobalStyles";
import Button from "theme/components/ButtonStyles";
import Heading from "theme/components/HeadingStyles";
import Link from "theme/components/LinkStyles";

const fonts = { mono: `'Menlo', monospace` };
const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  styles: {
    global: globalStyles,
  },
  components: {
    Button,
    Heading,
    Link,
  },
  colors: {
    primary: {
      50: "#ffe4fe",
      100: "#f2b4ff",
      200: "#e383fc",
      300: "#d052f9",
      400: "#bc22f6",
      500: "#9b09dd",
      600: "#8405ad",
      700: "#67027d",
      800: "#44004d",
      900: "#1c001e",
    },
    secondary: "#245f59",
  },
  fonts,
  breakpoints,
  initialColorMode: "dark",
  useSystemColorMode: false,
});

export default theme;
