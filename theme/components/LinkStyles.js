import { mode } from "@chakra-ui/theme-tools";

const LinkStyles = {
  // Styles for the base style
  baseStyle: props => ({
    color: mode("primary.600", "primary.400")(props),
    _hover: {
      color: mode("primary.400", "primary.200")(props),
      textDecoration: "none",
    },
  }),
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    socials: props => ({
      color: mode("primary.600", "primary.400")(props),
      _hover: {
        color: mode("primary.400", "primary.200")(props),
      },
    }),
  },
  // The default `size` or `variant` values
  defaultProps: {},
};

export default LinkStyles;
