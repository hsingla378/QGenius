"use client";

import React, { useEffect, useState } from "react";
import {
  Container,
  Heading,
  Stack,
  Text,
  ChakraProvider,
  RadioGroup,
  Radio,
  useToast,
  Skeleton,
} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { DropDown } from "../DropDown/DropDown";
import "./Quiz.css";
import QuestionCointainer from "./QuestionCointainer";

export default function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]); // Track user answers
  const [selectedOptions, setSelectedOptions] = useState({
    topic: "",
    subtopic: "",
    difficulty: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSearchData = async () => {
    setLoading(true);
    const response = await fetch(
      `http://localhost:8082/generate-quiz?topic=${selectedOptions.topic}&subtopic=${selectedOptions.subtopic}&difficulty=${selectedOptions.difficulty}`
    );
    let responseData = await response.json();
    // console.log("responseData", responseData.ans);
    responseData = JSON.parse(responseData.ans);
    console.log("responseDataijson", responseData.questions);
    setQuizData(responseData.questions);
    setLoading(false);
  };

  const toast = useToast();

  // const quizData = [
  //   {
  //     question:
  //       "Design a low-level class structure for an Online Polling System.",
  //     options: [
  //       "Interpreter pattern",
  //       "Iterator pattern",
  //       "Bridge pattern",
  //       "Observer pattern",
  //     ],
  //     answer: "Observer pattern",
  //   },
  //   {
  //     question:
  //       "Design a low-level class structure for a Flight Booking System.",
  //     options: [
  //       "Chain of Responsibility pattern",
  //       "Prototype pattern",
  //       "Visitor pattern",
  //       "Adapter pattern",
  //     ],
  //     answer: "Adapter pattern",
  //   },
  // ];

  // Function to check if the selected answer is correct
  const checkAnswer = (questionIndex, selectedOption) => {
    const correctAnswer = quizData[questionIndex].answer;
    const isCorrect = selectedOption === correctAnswer;
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[questionIndex] = isCorrect;
    setUserAnswers(updatedUserAnswers);
  };

  return (
    <ChakraProvider>
      <Navbar loading={loading} />
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
        handleSearchData={handleSearchData}
      />
      {loading ? (
        <Container mt={8}>
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        </Container>
      ) : (
        quizData.map((element, index) => {
          return (
            <QuestionCointainer key={index}>
              <h1>{element.question}</h1>
              <RadioGroup defaultValue="">
                <Stack>
                  {element.options.map((option) => {
                    return (
                      <Radio
                        key={option}
                        value={option}
                        onChange={() => checkAnswer(index, option)}
                      >
                        {option}
                      </Radio>
                    );
                  })}
                </Stack>
              </RadioGroup>
              {userAnswers[index] !== undefined && (
                <Text display="none">
                  {userAnswers[index]
                    ? toast({
                        title: `Great job! That's absolutely correct.`,
                        status: "success",
                        isClosable: true,
                      })
                    : toast({
                        title: `Oops, it looks like there might be a mistake. Please try again.`,
                        status: "error",
                        isClosable: true,
                      })}
                </Text>
              )}
            </QuestionCointainer>
          );
        })
      )}
      <Footer />
    </ChakraProvider>
  );
}
