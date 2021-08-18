import { FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link, HStack } from "@chakra-ui/react";

const Socials = () => (
  <HStack spacing="20px">
    <Link href="https://github.com/stoutlabs" variant="socials" isExternal>
      <FaGithub size="24px" />
    </Link>

    <Link href="https://twitter.com/stoutlabs" variant="socials" isExternal>
      <FaTwitter size="24px" />
    </Link>

    <Link href="mailto:email@somewhere.com" variant="socials">
      <FaEnvelope size="24px" />
    </Link>
  </HStack>
);

export default Socials;
