import React from "react";
import {
  Container,
  Button,
  ChakraProvider,
  Select,
  Box,
} from "@chakra-ui/react";
import { quizData } from "../quizData";
import { API_URL } from "../constants";

export const DropDown = ({
  type,
  setSelectedOptions,
  selectedOptions,
  handleSearchData,
  loading,
  setLoading,
}) => {
  const handleSearch = (handleSearch) => {
    handleSearchData(handleSearch);
  };
  async function downloadData(url) {
    setLoading(true);
    await fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "file.txt"; // Set the desired file name
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
    setLoading(false);
  }
  const downloader = async (data) => {
    switch (data.topic) {
      case "DSA":
        downloadData(
          `${API_URL}/genrate-and-download-codes-dsa?topic=${data.topic}&subtopic=${data.subtopic}&difficulty=${data.difficulty}`
        );
        break;
      case "High Level Design":
        downloadData(
          `${API_URL}/genrate-and-download-codes-system-design?topic=${data.topic}&subtopic=${data.subtopic}&difficulty=${data.difficulty}`
        );
        break;
      case "Low Level Design":
        downloadData(
          `${API_URL}/genrate-and-download-codes-system-design?topic=${data.topic}&subtopic=${data.subtopic}&difficulty=${data.difficulty}`
        );
        break;
      case "Backend":
        downloadData(
          `${API_URL}/genrate-and-download-codes-developement?topic=${data.topic}&subtopic=${data.subtopic}&difficulty=${data.difficulty}`
        );
        break;
      case "Frontend":
        downloadData(
          `${API_URL}/genrate-and-download-codes-developement?topic=${data.topic}&subtopic=${data.subtopic}&difficulty=${data.difficulty}`
        );
        break;
      default:
        // Handle the case when data.topic is not one of the specified topics
        break;
    }
  };
  return (
    <ChakraProvider>
      <Box className="query-box">
        {type !== "dsa" && (
          <Container mb={4} w="100%">
            <Select
              placeholder="Select Topic"
              onChange={(e) => {
                setSelectedOptions((prev) => ({
                  ...prev,
                  topic: e.target.value,
                }));
              }}
            >
              {quizData.map((data) => {
                return <option value={data.topic}>{data.topic}</option>;
              })}
            </Select>
          </Container>
        )}
        {selectedOptions.topic || type === "dsa" ? (
          <Container my={type === "dsa" ? 4 : 6}>
            <Select
              placeholder="Select Subtopic"
              onChange={(e) => {
                setSelectedOptions((prev) => ({
                  ...prev,
                  subtopic: e.target.value,
                }));
              }}
            >
              {type !== "dsa"
                ? quizData
                    .filter(
                      (category) => category.topic === selectedOptions.topic
                    )[0]
                    .subtopics.map((subtopic) => {
                      return <option value={subtopic}>{subtopic}</option>;
                    })
                : quizData
                    .filter((category) => category.topic === "DSA")[0]
                    .subtopics.map((subtopic) => {
                      return <option value={subtopic}>{subtopic}</option>;
                    })}
            </Select>
          </Container>
        ) : (
          ""
        )}
        {selectedOptions.subtopic && (
          <Container my={6}>
            <Select
              placeholder="Select Difficulty"
              onChange={(e) => {
                setSelectedOptions((prev) => ({
                  ...prev,
                  difficulty: e.target.value,
                }));
              }}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </Select>
          </Container>
        )}
        {selectedOptions.difficulty && (
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"green"}
            bg={"green.500"}
            _hover={{ bg: "green.500" }}
            onClick={() => {
              if (window.location.pathname !== "/Content") {
                handleSearch(selectedOptions);
              } else {
                downloader(selectedOptions);
              }
            }}
            isLoading={loading}
          >
            Generate
          </Button>
        )}
      </Box>
    </ChakraProvider>
  );
};
