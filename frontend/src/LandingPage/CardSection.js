"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  textDecoration,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "300px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      h="100%"
      textDecor="none"
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={3}>
          <Heading fontSize="1.4rem">{heading}</Heading>
          <Text mt={2} fontSize="1.1rem" color="gray.400">
            {description}
          </Text>
        </Box>
        <Button mt={2} color="green.500" size="md">
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function gridListWith() {
  return (
    <Box p={12}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Key Features
        </Heading>
        <Text color={"gray.500"} fontSize={{ base: "sm", sm: "lg" }}>
          Explore the powerful features of QGenius that make learning and
          preparation easy.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center" alignItems="stretch">
          <ChakraLink
            as={ReactRouterLink}
            to="/dsa"
            className="no-text-decoration"
          >
            <Card
              heading={"Generate DSA Questions"}
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              description={
                "QGenius allows you to generate DSA (Data Structures and Algorithms) questions effortlessly. Practice and improve your problem-solving skills."
              }
              href={"#"}
            />
          </ChakraLink>
          <ChakraLink
            as={ReactRouterLink}
            to="/quiz"
            className="no-text-decoration"
          >
            <Card
              heading={"Play Interactive Quizzes"}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={
                "Engage in interactive quizzes on various subjects. Test your knowledge, challenge yourself, and have fun while learning."
              }
              href={"#"}
            />
          </ChakraLink>

          <ChakraLink
            as={ReactRouterLink}
            to="/questions-generator"
            className="no-text-decoration"
          >
            <Card
              heading={"Prepare For Interviews"}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={
                "QGenius provides a vast collection of random interview questions to help you prepare for job interviews. Boost your confidence and ace the interview."
              }
              href={"#"}
            />
          </ChakraLink>
        </Flex>
      </Container>
    </Box>
  );
}
