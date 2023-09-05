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
  RadioGroup,
  Radio,
  StackDivider,
} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { DropDown } from "../DropDown/DropDown";
import "./Quiz.css";
import { useState } from "react";
import QuestionCointainer from "./QuestionCointainer";

export default function Quiz() {
  const [selectedOptions, setSelectedOptions] = useState({
    topic: "",
    subtopic: "",
    difficulty: "",
  });
  const data = [
    {
      question:
        "Design a low-level class structure for an Online Polling System.",
      options: [
        "Interpreter pattern",
        "Iterator pattern",
        "Bridge pattern",
        "Observer pattern",
      ],
      answer: "Observer pattern",
    },
    {
      question:
        "Design a low-level class structure for a Flight Booking System.",
      options: [
        "Chain of Responsibility pattern",
        "Prototype pattern",
        "Visitor pattern",
        "Adapter pattern",
      ],
      answer: "Adapter pattern",
    },
  ];
  const [questions] = useState();
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
            <Text as={"span"} color={"green.500"}>
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
      <DropDown
        type="quiz"
        setSelectedOptions={setSelectedOptions}
        selectedOptions={selectedOptions}
      />
      {data.map((element) => {
        return (
          <QuestionCointainer>
            <h1>{element.question}</h1>
            <RadioGroup defaultValue="">
              <Stack>
                <Radio value="1">{element.options[0]}</Radio>
                <Radio value="2">{element.options[1]}</Radio>
                <Radio value="3">{element.options[2]}</Radio>
                <Radio value="3">{element.options[3]}</Radio>
              </Stack>
            </RadioGroup>
          </QuestionCointainer>
        );
      })}

      <Footer />
    </ChakraProvider>
  );
}
