import Head from "next/head";
import { Flex } from "@chakra-ui/react";

import Nav from "components/Nav";
import ContentBox from "components/ContentBox";
import { DarkModeSwitch } from "components/DarkModeSwitch";
import { Footer } from "components/Footer";

const Layout = props => {
  const { title = "StoutLabs | NextJS and Chakra UI, with Preact", children } =
    props;

  return (
    <Flex id="site-main" direction="column" minHeight="100vh">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <DarkModeSwitch /> */}

      <Nav />

      <ContentBox py={4} flex="1">
        {children}
      </ContentBox>

      <Footer />
    </Flex>
  );
};

export default Layout;
