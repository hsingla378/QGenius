import React, { useState, useEffect } from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

export default function SearchBox({ SetAnswer, setQueryAsked }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholderText, setPlaceholderText] = useState("");
  const sentences = [
    "What does OOP stand for?",
    " What is SQL used for?",
    "What's a boolean?",
    "What's a loop that runs indefinitely?",
    "What's a database primary key?",
  ];

  const fetchData = async (text) => {
    const response = await fetch(
      "http://localhost:8082/askmeanything?q=" + text
    );
    const data = await response.json();
    console.log("response answer", data.ans);
    SetAnswer(data.ans);
    setQueryAsked(text);
  };

  const handleSearchButton = () => {
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
    <InputGroup size="md" className="hero-search">
      <Input
        pr="4.5rem"
        type="text"
        placeholder={placeholderText}
        onChange={handleSearchQuery}
        value={searchQuery}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleSearchButton}>
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
