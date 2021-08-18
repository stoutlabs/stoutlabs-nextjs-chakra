import { mode, lighten, darken } from "@chakra-ui/theme-tools";

const HeadingStyles = {
  // Styles for the base style
  baseStyle: props => ({
    color: props.colorMode === "dark" ? "primary.400" : "primary.700",
  }),
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    primary: props => ({
      color: mode("primary.600", "primary.200")(props),
      fontWeight: "thin",
      textTransform: "uppercase",
    }),
  },
  // The default `size` or `variant` values
  defaultProps: {},
};

export default HeadingStyles;
