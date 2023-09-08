/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Container } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export const FeedbackForm = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <Container p={4} width="100%" pt={4}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScjUVX13ccRPfgdt9mKIj4qKIZTC9QYCssYV4OHG_b0qIZ9rA/viewform?embedded=true"
          width="640"
          height="374"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </Container>
      <Footer />
    </ChakraProvider>
  );
};
