"use client";

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  ChakraProvider,
} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { DropDown } from "../DropDown/DropDown";

export default function Question() {
  return (
    <ChakraProvider>
      <Navbar />
      <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Explore Random Questions{" "}
            <Text as={"span"} color={"orange.400"}>
              - Tailored to Your Learnin
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            QGenius allows you to generate random questions on various topics.
            Choose your preferred topic, subtopic, and difficulty level. Our
            platform will generate random questions based on your preferences.
            Learn and prepare with these questions to enhance your knowledge and
            interview readiness.
          </Text>
        </Stack>
      </Container>
      <DropDown type="questions" />
      <Footer />
    </ChakraProvider>
  );
}
