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
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
// interface CardProps {
//   heading: string
//   description: string
//   icon: ReactElement
//   href: string
// }

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
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
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
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
          Short heading
        </Heading>
        <Text color={"gray.500"} fontSize={{ base: "sm", sm: "lg" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>

      <Container maxW={"5xl"} my={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Link href="/dsa">
            <Card
              onClick={() => console.log("helloo")}
              heading={"DSA"}
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              description={
                "Lorem asdipsum dolor sit amet catetur, adipisicing elit."
              }
            />
          </Link>
          <span onClick={() => console.log("ello")}>
            <Card
              heading={"Quiz"}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
              href={"#"}
            />
          </span>
          <span onClick={() => console.log("ello")}>
            <Card
              heading={"Questions"}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
              href={"#"}
            />
          </span>
        </Flex>
      </Container>
    </Box>
  );
}
