import React from "react";
import { Text, Heading, Container } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export const PrivacyPolicy = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <Container p={4} maxW="5xl" pt={4}>
        <Heading fontSize="xl" fontWeight="bold" my={4}>
          Privacy Policy for QGenius
        </Heading>
        <Text fontSize="md" my={4}>
          Effective Date: 08 September 2023
        </Text>
        <Text my={4}>
          QGenius is a learning platform that does not collect any personal data
          from its users. Our platform is designed to provide information based
          on user queries by interacting with the ChatGPT API. We prioritize
          your privacy and do not store or share any user data.
        </Text>

        <Text fontSize="2xl" fontWeight="bold" my={4}>
          User Privacy
        </Text>
        <ul>
          <li>
            <strong>No Data Collection:</strong> QGenius does not collect,
            store, or share any personal information, usage data, or
            user-generated content.
          </li>
          <br />
          <li>
            <strong>ChatGPT API:</strong> When you use our platform, your
            queries are sent to the ChatGPT API to provide responses. Any data
            exchanged with the API is subject to the privacy policy of the API
            provider.
          </li>
          <br />
          <li>
            <strong>Cookies:</strong> QGenius may use cookies for session
            management and functionality purposes, but these cookies do not
            contain personal information.
          </li>
        </ul>
      </Container>
      <Footer />
    </ChakraProvider>
  );
};
