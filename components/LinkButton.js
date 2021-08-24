import NextLink from "next/link";
import { Button } from "@chakra-ui/react";

const CustomLink = props => {
  const { href, children, scroll = false } = props;

  return (
    <NextLink href={href} scroll={scroll} passHref>
      <Button as="a" {...props}>
        {children}
      </Button>
    </NextLink>
  );
};

export default CustomLink;
