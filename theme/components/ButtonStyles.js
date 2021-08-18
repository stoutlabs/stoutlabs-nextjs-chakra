import { mode, whiten, darken } from "@chakra-ui/theme-tools";

const ButtonStyles = {
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    navBtn: props => ({
      bg: "transparent",
      fontSize: ["md", "md", "lg", "xl"],
      color: mode("primary.600", "primary.500")(props),
      borderRadius: "none",
      _hover: {
        color: mode("primary.400", "primary.200")(props),
      },
      _active: {
        color: mode("primary.400", "primary.50")(props),
        borderBottom: "1px solid",
        borderColor: "primary.500",
      },
    }),
    primary: props => ({
      bg: mode("primary.600", "primary.400")(props),
      color: "white",
      _hover: {
        bg: mode(darken("primary.500", 20), whiten("primary.500", 30))(props),
      },
    }),
  },
  // The default `size` or `variant` values
  defaultProps: {},
};

export default ButtonStyles;
