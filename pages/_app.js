import { ChakraProvider, Flex } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

import Nav from "components/Nav";
import { Footer } from "components/Footer";
import ContentBox from "components/ContentBox";

import theme from "theme/theme";
import "scss/main.scss";

function MyApp({ Component, pageProps, router }) {
  const urlBase = "https://www.yoursite.com";
  const url = `${urlBase}${router.asPath}`;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <DefaultSeo
        titleTemplate="%s | Title Suffix"
        openGraph={{
          type: "website",
          locale: "en_US",
          url,
          description: "Your default (homepage) site description here.",
          site_name: "Site Name | yoursite.com",
          images: [
            {
              url: `${urlBase}/site-image.jpg`,
              width: 1200,
              height: 600,
              alt: "Site Image",
            },
          ],
        }}
        canonical={url}
      />
      <ChakraProvider resetCSS theme={theme}>
        <Flex id="site-main" direction="column" minHeight="100vh">
          <Nav />

          <ContentBox py={4} flex="1">
            <AnimatePresence
              exitBeforeEnter
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <Component {...pageProps} canonical={url} key={url} />
            </AnimatePresence>
          </ContentBox>

          <Footer />
        </Flex>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
