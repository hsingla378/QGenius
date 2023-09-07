/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export default function SearchBox({ SetAnswer, setQueryAsked, setLoading }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholderText, setPlaceholderText] = useState("");
  // const [loading, setLoading] = useState(false);
  const sentences = [
    "What does OOP stand for?",
    " What is SQL used for?",
    "What's a boolean?",
    "What's a loop that runs indefinitely?",
    "What's a database primary key?",
  ];

  const fetchData = async (text) => {
    setLoading(true);
    const response = await fetch(
      "http://localhost:8082/askmeanything?q=" + text
    );
    const data = await response.json();
    console.log("response answer", data.ans);
    SetAnswer(data.ans);
    setQueryAsked(text);
    setLoading(false);
  };

  const handleSearchButton = (e) => {
    e.preventDefault(); // prevent
    if (!searchQuery) return;
    fetchData(searchQuery);
    console.log(searchQuery);
  };

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    // Create a timer to cycle through sentences every few seconds
    const timer = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 4000); // Change the delay (in milliseconds) as needed

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    // Typing effect for the placeholder text
    let currentIndex = 0;
    let typingInterval;

    const typePlaceholder = () => {
      if (currentIndex <= sentences[placeholderIndex].length) {
        setPlaceholderText((prevText) =>
          sentences[placeholderIndex].substring(0, currentIndex)
        );
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    };

    // Clear previous typing effect
    setPlaceholderText("");

    // Start typing effect after a short delay
    setTimeout(() => {
      typingInterval = setInterval(typePlaceholder, 100); // Adjust the typing speed (in milliseconds) as needed
    }, 500); // Adjust the delay (in milliseconds) before starting the typing effect as needed

    return () => {
      clearInterval(typingInterval);
    };
  }, [placeholderIndex]);

  return (
    <form onSubmit={handleSearchButton}>
      <InputGroup size="md" className="hero-search">
        <Input
          p="1.7rem"
          type="text"
          placeholder={placeholderText}
          onChange={handleSearchQuery}
          value={searchQuery}
          onSubmit={handleSearchButton}
          rounded={"full"}
        />
        <InputRightElement width="4.5rem" h="100%">
          {/* <Button h="1.75rem" size="sm" onClick={handleSearchButton}>
            Search
          </Button> */}
          <Search2Icon
            w={8}
            h={8}
            color="green.500"
            onClick={handleSearchButton}
          />
        </InputRightElement>
      </InputGroup>
    </form>
  );
}
