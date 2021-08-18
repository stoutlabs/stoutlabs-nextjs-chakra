import NextLink from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Box, Flex, Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { DarkModeSwitch } from "components/DarkModeSwitch";

const Nav = () => {
  const router = useRouter();
  const [display, changeDisplay] = useState("none");

  return (
    <Box>
      <Flex
        position="relative"
        flexDir="row"
        justify={["flex-start", "flex-start", "center"]}
        align="center"
      >
        {/* Desktop */}
        <ButtonGroup display={["none", "none", "flex", "flex"]} my={5}>
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="navBtn"
              aria-label="Home"
              w="100%"
              isActive={router.pathname === "/"}
            >
              Home
            </Button>
          </NextLink>

          <NextLink href="/blog" passHref>
            <Button
              as="a"
              variant="navBtn"
              aria-label="Blog"
              w="100%"
              isActive={router.pathname.startsWith("/blog")}
            >
              Blog
            </Button>
          </NextLink>
        </ButtonGroup>

        <DarkModeSwitch />

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          m={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
          colorScheme="blue"
          variant="ghost"
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bg="gray.400"
        zIndex="overlay"
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end" pr="2">
          <IconButton
            m={2}
            mr={4}
            aria-label="Open Menu"
            size="lg"
            bg="primary.100"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={3} w="100%">
              Home
            </Button>
          </NextLink>

          <NextLink href="/blog" passHref>
            <Button as="a" variant="ghost" aria-label="Blog" my={3} w="100%">
              Blog
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Nav;
