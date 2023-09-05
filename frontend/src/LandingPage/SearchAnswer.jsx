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
  Stack,
  Skeleton,
} from "@chakra-ui/react";

// interface IBlogTags {
//   tags: Array<string>
//   marginTop?: SpaceProps['marginTop']
// }

// interface Props {
//   marginTop?: number
//   tags: any[]
// }

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

// interface BlogAuthorProps {
//   date: Date
//   name: string
// }

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
    <Container maxW={"7xl"} p="12" border="2px" my={10} rounded="lg">
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
          <Text as="p" fontSize="lg">
            {answer}
          </Text>
        </VStack>
      )}
    </Container>
  );
};

export default SearchAnswer;
