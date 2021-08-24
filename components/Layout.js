import { motion } from "framer-motion";
import { Container } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const MotionContainer = motion(Container);

const variants = {
  hidden: { opacity: 0, x: -40, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -30 },
};

const Layout = props => {
  const {
    children,
    title,
    description,
    images = [],
    maxW = "container.lg",
  } = props;

  const pics =
    images.length > 0
      ? images.map(img => ({
          url: `https://www.yoursite.com${img}`,
        }))
      : null;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description, images: pics }}
      />
      <MotionContainer
        maxW={maxW}
        px={["4", "6"]}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
      >
        {children}
      </MotionContainer>
    </>
  );
};

export default Layout;
