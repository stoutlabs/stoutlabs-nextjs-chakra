import { ChakraProvider } from "@chakra-ui/react";

import theme from "theme/theme";
import "scss/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
