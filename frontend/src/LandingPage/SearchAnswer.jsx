"use client";
import React from "react";
import {
  Heading,
  Text,
  Container,
  VStack,
  Stack,
  Skeleton,
} from "@chakra-ui/react";

const SearchAnswer = ({
  answer = "",
  queryAsked = "",
  loading,
  heading,
  title,
}) => {
  let updatedQueryAsked =
    queryAsked.charAt(0).toUpperCase() + queryAsked.slice(1);
  console.log(updatedQueryAsked);
  return (
    <Container maxW={"5xl"} p="6" border="2px" my={10} rounded="lg">
      <Heading>{heading}</Heading>
      {loading ? (
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      ) : (
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Text fontSize="1.3rem" fontWeight="500">
            {title}
          </Text>
          <Heading as="h2" size="lg" mb={4}>
            {updatedQueryAsked}
          </Heading>
          <Text as="p" fontSize="lg" width="100%">
            {answer}
          </Text>
        </VStack>
      )}
    </Container>
  );
};

export default SearchAnswer;
