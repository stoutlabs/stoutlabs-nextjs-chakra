import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const CustomLink = props => {
  const { href, children, scroll = false } = props;

  return (
    <NextLink href={href} passHref scroll={scroll}>
      <Link {...props}>{children}</Link>
    </NextLink>
  );
};

export default CustomLink;
