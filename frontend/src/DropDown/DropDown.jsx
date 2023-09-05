import React, { useState } from "react";
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

export const DropDown = ({
  type,
  setSelectedOptions,
  selectedOptions,
  handleSearchData,
}) => {
  const handleSearch = (handleSearch) => {
    handleSearchData(handleSearch);
  };
  return (
    <ChakraProvider>
      <Box className="query-box">
        {type !== "dsa" && (
          <Container mb={4} w="100%">
            <Select
              placeholder="Select Topic"
              onChange={(e) => {
                setSelectedOptions((prev) => ({
                  ...prev,
                  topic: e.target.value,
                }));
              }}
            >
              {quizData.map((data) => {
                return <option value={data.topic}>{data.topic}</option>;
              })}
            </Select>
          </Container>
        )}
        {console.log("test", selectedOptions.topic || type === "dsa")}
        {selectedOptions.topic || type === "dsa" ? (
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
              {type !== "dsa"
                ? quizData
                    .filter(
                      (category) => category.topic === selectedOptions.topic
                    )[0]
                    .subtopics.map((subtopic) => {
                      return <option value={subtopic}>{subtopic}</option>;
                    })
                : quizData
                    .filter((category) => category.topic === "DSA")[0]
                    .subtopics.map((subtopic) => {
                      return <option value={subtopic}>{subtopic}</option>;
                    })}
            </Select>
          </Container>
        ) : (
          ""
        )}
        {selectedOptions.subtopic && (
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
        )}
        {selectedOptions.difficulty && (
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"green"}
            bg={"green.500"}
            _hover={{ bg: "green.500" }}
            onClick={() => {
              handleSearch(selectedOptions);
            }}
            // margin="auto"
          >
            Generate
          </Button>
        )}
      </Box>
    </ChakraProvider>
  );
};
