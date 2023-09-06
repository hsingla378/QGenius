"use client";

import {
  Container,
  Heading,
  Stack,
  Text,
  ChakraProvider,
  Skeleton,
} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { DropDown } from "../DropDown/DropDown";
import { useState } from "react";
import GenerateAccordions from "./GenerateAccordions";

export default function Question() {
  const [selectedOptions, setSelectedOptions] = useState({
    topic: "",
    subtopic: "",
    difficulty: "",
  });
  const [data, setData] = useState({ questions: [] });
  const [loading, setLoading] = useState(false);
  const handleSearchData = async (data) => {
    try {
      setLoading(true);
      let responce = await fetch(
        `http://localhost:8082/interview-prep/?difficulty=${selectedOptions.difficulty}&topic=${selectedOptions.topic}&subtopic=${selectedOptions.subtopic}`
      );
      let responseData = await responce.json();

      const jsonArray = JSON.parse(responseData.ans);

      console.log(jsonArray, "gggggg");
      setData(jsonArray);
    } catch (e) {
      console.log(e, "error");
    }
    setLoading(false);
  };

  return (
    <ChakraProvider>
      <Navbar loading={loading} />
      <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            {window.location.pathname !== "/Content"
              ? " Explore Random Questions"
              : "Personalized Question Download"}{" "}
            <Text as={"span"} color={"green.400"}>
              {window.location.pathname !== "/Content"
                ? " - Tailored to Your Learning"
                : " - Perfect Targeted Learning"}
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            {window.location.pathname !== "/Content"
              ? "QGenius allows you to generate random questions on various topics.Choose your preferred topic, subtopic, and difficulty level. Ourplatform will generate random questions based on your preferences.Learn and prepare with these questions to enhance your knowledge andinterview readiness."
              : "QGenius provides you with the opportunity to customize your question downloads according to your preferred topic, subtopic, and desired difficulty level. Once you've selected your specific preferences, our platform will generate a tailored set of questions for you to download. These questions are designed to help you learn and prepare efficiently, whether it's for enhancing your knowledge or boosting your interview readiness."}
          </Text>
        </Stack>
      </Container>
      <DropDown
        type="questions"
        setSelectedOptions={setSelectedOptions}
        selectedOptions={selectedOptions}
        handleSearchData={handleSearchData}
        loading={loading}
        setLoading={setLoading}
      />
      {window.location.pathname !== "/Content" ? (
        loading ? (
          <Container mt={8}>
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          </Container>
        ) : (
          <GenerateAccordions questionsList={data} loading={loading} />
        )
      ) : (
        ""
      )}
      <Footer />
    </ChakraProvider>
  );
}
