import { Container, Flex, Text } from "@chakra-ui/react";

import Socials from "components/Socials";

export const Footer = props => (
  <Flex
    as="footer"
    direction="column"
    py="8"
    justifyContent="center"
    align="center"
    {...props}
  >
    <Socials />

    <Container mt={5}>
      <Text align="center">
        Copyright StoutLabs.com {new Date().getFullYear()}
      </Text>
    </Container>
  </Flex>
);
