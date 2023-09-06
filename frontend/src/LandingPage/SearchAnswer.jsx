"use client";
import React, { useEffect } from "react";
import { Heading, Container, VStack, Stack, Skeleton } from "@chakra-ui/react";
import "./SearchAnswer.css";

const SearchAnswer = ({ answer = "", queryAsked = "", loading, heading }) => {
  useEffect(() => {
    // Check if the element exists before setting innerHTML
    const searchAnswerElement = document.getElementById("searchAnswer");
    if (searchAnswerElement) {
      searchAnswerElement.innerHTML = answer;
    }
  }, [answer]);

  let updatedQueryAsked =
    queryAsked.charAt(0).toUpperCase() + queryAsked.slice(1);
  console.log(updatedQueryAsked);
  return (
    <>
      <Container maxW={"5xl"} py="4" px="10" border="2px" my={10} rounded="lg">
        {loading ? (
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        ) : (
          <VStack spacing="2" alignItems="flex-start">
            <Heading as="h2" size="lg" mb={4}>
              {updatedQueryAsked}
            </Heading>
            <div id="searchAnswer"></div>
          </VStack>
        )}
      </Container>
    </>
  );
};

export default SearchAnswer;
