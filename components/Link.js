import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const CustomLink = props => {
  const { href, children } = props;

  return (
    <NextLink href={href} passHref>
      <Link {...props}>{children}</Link>
    </NextLink>
  );
};

export default CustomLink;
