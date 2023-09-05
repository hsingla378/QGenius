"use client";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  Stack,
  Skeleton,
  useToast,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

export default function GenerateAccordions({ questionsList, loading }) {
  const toast = useToast();
  return (
    <Flex
      // minH={"100vh"}
      my={10}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Container maxWidth="100%">
        {loading ? (
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        ) : (
          <Accordion
            allowMultiple
            width="100%"
            maxW="2xl"
            // bg="white"
            margin="auto"
            rounded="lg"
            // backgroundColor="tomato"
          >
            {console.log(questionsList, "inside accordian")}
            {questionsList.questions.length ? (
              questionsList.questions.map((question) => {
                return (
                  <AccordionItem border="1px solid" my={4}>
                    <AccordionButton
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      p={4}

                      // _hover={{ bg: "gray.100" }}
                    >
                      <Text fontSize="md" textAlign="left">
                        {question.question}
                      </Text>
                      <ChevronDownIcon fontSize="24px" color="green.500" />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Text color="gray.500">{question.answer}</Text>
                    </AccordionPanel>
                  </AccordionItem>
                );
              })
            ) : (
              <Text display="none">
                console.log("Test")
                {/* {toast({
                  title: `There is some issue in backend, please try again...`,
                  status: "error",
                  isClosable: true,
                })} */}
              </Text>
            )}
            {/* {questionsList.questions.length > 0
              ? questionsList.questions.map((question) => {
                  return (
                    <AccordionItem>
                      <AccordionButton
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        p={4}
                        _hover={{ bg: "gray.100" }}
                      >
                        <Text fontSize="md" color="gray.800" textAlign="left">
                          {question.question}
                        </Text>
                        <ChevronDownIcon fontSize="24px" />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Text color="gray.600">{question.answer}</Text>
                      </AccordionPanel>
                    </AccordionItem>
                  );
                })
              : console.log("hello")} */}
          </Accordion>
        )}
      </Container>
    </Flex>
  );
}
