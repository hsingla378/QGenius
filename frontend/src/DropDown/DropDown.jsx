import React from "react";
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
import { quizData } from "../quizData";

export const DropDown = ({ type }) => {
  return (
    <ChakraProvider>
      <Box className="query-box">
        {type !== "dsa" && (
          <Container mb={4} w="100%">
            <Select placeholder="Select Topic">
              {quizData.map((data) => {
                return <option value={data.topic}>{data.topic}</option>;
              })}
            </Select>
          </Container>
        )}
        <Container my={type === "dsa" ? 4 : 6}>
          <Select placeholder="Select Subtopics">
            {quizData[0].subtopics.map((subtopic) => {
              return <option value={subtopic}>{subtopic}</option>;
            })}
          </Select>
        </Container>
        <Container my={6}>
          <Select placeholder="Select Difficulty">
            <option value="option1">Easy</option>
            <option value="option2">Medium</option>
            <option value="option3">Difficult</option>
          </Select>
        </Container>
        <Button
          rounded={"full"}
          px={6}
          colorScheme={"orange"}
          bg={"orange.400"}
          _hover={{ bg: "orange.500" }}
          // margin="auto"
        >
          Generate
        </Button>
      </Box>
    </ChakraProvider>
  );
};
