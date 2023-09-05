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
import "./Quiz.css";
import { quizData } from "./quizData";

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
          <Stack spacing={6} direction={"row"}>
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"orange"}
              bg={"orange.400"}
              _hover={{ bg: "orange.500" }}
            >
              Get started
            </Button>
            <Button rounded={"full"} px={6}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
      <Box className="query-box">
        <Container my={4} w="100%">
          <Select placeholder="Select Topic">
            {quizData.map((data) => {
              return <option value={data.topic}>{data.topic}</option>;
            })}
          </Select>
        </Container>
        <Container my={4}>
          <Select placeholder="Select Difficulty">
            {quizData[0].subtopics.map((subtopic) => {
              return <option value={subtopic}>{subtopic}</option>;
            })}
          </Select>
        </Container>
        <Container my={4}>
          <Select placeholder="Select Difficulty">
            <option value="option1">Easy</option>
            <option value="option2">Medium</option>
            <option value="option3">Difficult</option>
          </Select>
        </Container>
      </Box>
      <Footer />
    </ChakraProvider>
  );
}
