import { Center, Heading, Text } from "@chakra-ui/react";

import Layout from "components/Layout";

const AboutPage = () => (
  <Layout title="About" description="Description here for about page.">
    <Center flexDirection="column">
      <Heading my="8">About Page</Heading>
      <Text mb="8">Welcome.</Text>
    </Center>
  </Layout>
);

export default AboutPage;
