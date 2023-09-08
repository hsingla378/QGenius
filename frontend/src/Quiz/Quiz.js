"use client";

import React, { useState } from "react";
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
import { API_URL } from "../constants";

export default function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]); // Track user answers
  const [selectedOptions, setSelectedOptions] = useState({
    topic: "",
    subtopic: "",
    difficulty: "",
  });
  const [loading, setLoading] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(
    Array(quizData.length).fill(false)
  );

  const handleSearchData = async () => {
    setLoading(true);
    const response = await fetch(
      `${API_URL}/generate-quiz?topic=${selectedOptions.topic}&subtopic=${selectedOptions.subtopic}&difficulty=${selectedOptions.difficulty}`
    );
    let responseData = await response.json();
    responseData = JSON.parse(responseData.ans);
    setQuizData(responseData.questions);
    setLoading(false);
  };

  const toast = useToast();

  const checkAnswer = (questionIndex, selectedOption) => {
    const correctAnswer = quizData[questionIndex].answer;
    const isCorrect = selectedOption === correctAnswer;
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[questionIndex] = isCorrect;
    setUserAnswers(updatedUserAnswers);

    // Mark the question as answered
    const updatedAnsweredQuestions = [...answeredQuestions];
    updatedAnsweredQuestions[questionIndex] = true;
    setAnsweredQuestions(updatedAnsweredQuestions);

    // Display toast for the current question
    const toastId = `toast-${questionIndex}`;
    toast({
      id: toastId,
      title: isCorrect
        ? `Great job! That's absolutely correct.`
        : `Oops, it looks like there might be a mistake. Please try again.`,
      status: isCorrect ? "success" : "error",
      isClosable: true,
      duration: 2000,
    });
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
        loading={loading}
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
                  {element.options.map((option, index) => {
                    return (
                      <Radio
                        key={index}
                        value={option}
                        onChange={() => checkAnswer(index, option)}
                      >
                        {option}
                      </Radio>
                    );
                  })}
                </Stack>
              </RadioGroup>
            </QuestionCointainer>
          );
        })
      )}
      <Footer />
    </ChakraProvider>
  );
}
