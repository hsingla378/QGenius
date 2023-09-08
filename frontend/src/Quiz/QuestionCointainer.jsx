import React from "react";
import { Container, VStack, Stack, Skeleton } from "@chakra-ui/react";
import "./QustionContainer.css"
function QuestionCointainer({
  answer = "",
  queryAsked = "",
  loading = false,
  children,
}) {
  return (
    <>
      <Container maxW={"3xl"} p="12" border="2px" my={10} rounded="lg"  className="question-container">
        {loading ? (
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        ) : (
          <VStack paddingTop="5px" spacing="2" alignItems="flex-start">
            {children}
          </VStack>
        )}
      </Container>
    </>
  );
}

export default QuestionCointainer;
