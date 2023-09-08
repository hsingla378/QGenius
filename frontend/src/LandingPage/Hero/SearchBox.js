/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Input, InputGroup, InputRightElement, Box } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { API_URL } from "../../constants";

export default function SearchBox({ SetAnswer, setQueryAsked, setLoading }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholderText, setPlaceholderText] = useState("");
  const [showRefreshMessage, setShowRefreshMessage] = useState(false);

  const sentences = [
    "What does OOP stand for?",
    "What is SQL used for?",
    "What's a boolean?",
    "What's a loop that runs indefinitely?",
    "What's a database primary key?",
  ];

  const fetchData = async (text) => {
    setLoading(true);
    const response = await fetch(`${API_URL}/askmeanything?q=${text}`);
    const data = await response.json();
    SetAnswer(data.ans);
    setQueryAsked(text);
    setLoading(false);
  };

  const handleSearchButton = (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    fetchData(searchQuery);
  };

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
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

    setPlaceholderText("");

    setTimeout(() => {
      typingInterval = setInterval(typePlaceholder, 100);
    }, 500);

    return () => {
      clearInterval(typingInterval);
    };
  }, [placeholderIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!showRefreshMessage) {
        setShowRefreshMessage(true);
      }
    }, 30000);

    return () => {
      clearTimeout(timer);
    };
  }, [showRefreshMessage]);

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
          <Search2Icon
            w={8}
            h={8}
            color="green.500"
            onClick={handleSearchButton}
            style={{ cursor: "pointer" }}
          />
        </InputRightElement>
      </InputGroup>
      {showRefreshMessage && (
        <Box mt={2} color="red">
          {setLoading(false)}
          There is some issue in the backend. Please try refreshing the page...
        </Box>
      )}
    </form>
  );
}
