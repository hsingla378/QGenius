"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  IconButton,
} from "@chakra-ui/react";

const BlogTags = (props) => {
  const { marginTop = 0, tags } = props;

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const SearchAnswer = ({ answer, queryAsked }) => {
  function capitalizeAfterSpace(inputString) {
    if (!inputString) {
      return inputString; // Return the input string as is if it's empty or undefined
    }

    // Split the string into words using space as the delimiter
    const words = inputString.split(" ");

    // Capitalize the first letter of each word and join them back together
    const capitalizedWords = words.map((word) => {
      if (word.length === 0) {
        return word; // Return empty word as is
      }
      // Capitalize the first letter and concatenate with the rest of the word
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Join the capitalized words back with spaces to form the final string
    const resultString = capitalizedWords.join(" ");

    return resultString;
  }
  // let updatedQueryAsked = capitalizeAfterSpace(queryAsked);
  return (
    <Container maxW={"7xl"} p="12" border="2px" my={10} rounded="lg">
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2" size="lg">
          {queryAsked}
        </Heading>
        <Text as="p" fontSize="lg">
          {answer}
        </Text>
      </VStack>
    </Container>
  );
};

export default SearchAnswer;
