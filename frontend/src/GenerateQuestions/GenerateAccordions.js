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
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

export default function GenerateAccordions({ questionsList }) {
  return (
    <Flex
      // minH={"100vh"}
      my={10}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Container>
        <Accordion allowMultiple width="100%" maxW="lg" bg="white" rounded="lg">
          {questionsList.map((question) => {
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
          })}
        </Accordion>
      </Container>
    </Flex>
  );
}
