import { transparentize } from "@chakra-ui/theme-tools";

const global = props => ({
  a: {
    color: props.colorMode === "dark" ? "primary.300" : "primary.600",
    _hover: {
      color: props.colorMode === "dark" ? "primary.100" : "primary.400",
    },
  },

  // markdown styles below
  ".post-content": {
    "h2, h3, h4, h5, h6": {
      fontWeight: "thin",
      margin: "1.5rem 0 1rem",
    },
    h2: {
      fontSize: "4xl",
      borderLeft: "3px solid",
      borderColor: props.colorMode === "dark" ? "primary.400" : "primary.700",
      paddingLeft: "3",
    },
    h3: {
      fontSize: "3xl",
      borderBottom: "1px solid",
      borderColor:
        props.colorMode === "dark"
          ? transparentize("primary.800", 0.5)
          : transparentize("primary.600", 0.5),
    },
    h4: {
      fontSize: "2xl",
    },
    h5: {
      fontSize: "xl",
    },
    p: {
      fontSize: "md",
      lineHeight: "1.6",
      margin: "0 0 1.5rem",

      code: {
        background: props.colorMode === "dark" ? "gray.800" : "gray.700",
        color: "primary.500",
        padding: "2px 6px",
        display: "inline-block",
      },
    },
    ul: {
      margin: "0 0 1.5rem 1.5rem",
    },
    ol: {
      margin: "0 0 2rem 1.5rem",
    },
    blockquote: {
      margin: "1.5rem 0",
      padding: "4",
      background: props.colorMode === "dark" ? "gray.800" : "gray.200",
      fontStyle: "italic",

      "p:last-of-type": {
        marginBottom: 0,
      },
    },

    ".remark-highlight": {
      margin: "1.5rem 0 2rem",
    },
  },
});

export default global;
