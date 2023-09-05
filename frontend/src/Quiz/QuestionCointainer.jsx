import React from "react";
import { Container, VStack, Stack, Skeleton } from "@chakra-ui/react";
function QuestionCointainer({
  answer = "",
  queryAsked = "",
  loading = false,
  children,
}) {
  return (
    <>
      <Container maxW={"7xl"} p="12" border="2px" my={10} rounded="lg">
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
