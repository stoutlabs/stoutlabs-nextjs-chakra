import { Box, Container, Heading, Text, Button } from "@chakra-ui/react";
import NextImage from "next/image";

import Layout from "components/Layout";

// imported images work best, when possible
import abstractPic from "public/fpo_abstract1920.jpg";

const IndexPage = () => (
  <Layout>
    <Container maxW="container.xl" textAlign="center">
      <Heading my="8">Home Page</Heading>
      <Text mb="8">Welcome.</Text>

      <Text mb="8">
        Here's a standard button:{" "}
        <Button as="a" href="https://stoutlabs.com" isExternal>
          StoutLabs.com
        </Button>
      </Text>

      <Box maxW="container.sm" mb="8" mx="auto">
        <NextImage src={abstractPic} alt="Imported Image" layout="responsive" />
      </Box>

      <Text mb="8">
        Here's a "primary" variant button:{" "}
        <Button
          as="a"
          href="https://stoutlabs.com"
          isExternal
          variant="primary"
        >
          StoutLabs.com
        </Button>
      </Text>

      <Box maxW="container.md" mb="8" mx="auto">
        <NextImage
          src="/fpo_image.jpg"
          alt="Test Image"
          className="test-image"
          layout="responsive"
          width={900}
          height={500}
        />
      </Box>

      <Heading variant="primary" as="h3" mb="4">
        Here's an H3 Heading w/ "Primary" Variant Added
      </Heading>
      <Text>
        All of these colors (and more) are editable within the theme folder's
        files.
      </Text>
    </Container>
  </Layout>
);

export default IndexPage;
