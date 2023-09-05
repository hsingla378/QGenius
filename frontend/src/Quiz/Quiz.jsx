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
  Select,
  Box,
  Input,
} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { DropDown } from "../DropDown/DropDown";
import "./Quiz.css";

export default function Quiz() {
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
            Play Interactive Quizzes{" "}
            <Text as={"span"} color={"orange.400"}>
              - Test Your Knowledge
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            QGenius offers interactive quizzes on a variety of topics. Choose
            your topic, select a subtopic, and set the difficulty level. Our
            platform will generate random quiz questions tailored to your
            preferences. Test your knowledge and enjoy the quiz experience.
          </Text>
        </Stack>
      </Container>
      <DropDown type="quiz" />
      <Footer />
    </ChakraProvider>
  );
}
