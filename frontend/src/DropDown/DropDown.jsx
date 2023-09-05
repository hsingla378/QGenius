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

export const DropDown = ({ type, setSelectedOptions }) => {
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
          <Select
            placeholder="Select Subtopic"
            onChange={(e) => {
              setSelectedOptions((prev) => ({
                ...prev,
                subtopic: e.target.value,
              }));
            }}
          >
            {quizData[0].subtopics.map((subtopic) => {
              return <option value={subtopic}>{subtopic}</option>;
            })}
          </Select>
        </Container>
        <Container my={6}>
          <Select
            placeholder="Select Difficulty"
            onChange={(e) => {
              setSelectedOptions((prev) => ({
                ...prev,
                difficulty: e.target.value,
              }));
            }}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
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
