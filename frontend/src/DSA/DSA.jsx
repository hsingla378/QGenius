"use client";

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  ChakraProvider,
  Skeleton,
} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { DropDown } from "../DropDown/DropDown";
import { useState } from "react";
import SearchAnswer from "../LandingPage/SearchAnswer";

export default function DSA() {
  let sampleCode = `<div class="topic">
  <h3>Greedy</h3>
  <div class="difficulty">
      <h4>Easy</h4>
      <p class="question">Implement a function in JavaScript that finds the minimum number of coins required to make a given amount of change. You are given an array of coin denominations and the target amount. Return -1 if it's impossible to make the exact change with the provided coins.</p>
      <div class="examples">
          <h3 class="examples">Sample I/O</h3>
          <p><strong>Input:</strong> coins = [1, 2, 5], amount = 11</p>
          <p><strong>Output:</strong> 3</p>
          <p><strong>Explanation:</strong> 11 = 5 + 5 + 1</p>
      </div>
      <div class="constraints">
          <p><strong>Constraints:</strong></p>
          <p>1. 1 <= coins.length <= 12</p>
          <p>2. 1 <= coins[i] <= 10^4</p>
          <p>3. 0 <= amount <= 10^4</p>
      </div>
      <div class="solution">
          <h3>Solution</h3>
          <pre>
              <code>
  function minCoins(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  
  for (const coin of coins) {
      for (let i = coin; i <= amount; i++) {
          dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
  }
  
  return dp[amount] === Infinity ? -1 : dp[amount];
  }
              </code>
          </pre>
      </div>
      <div class="faqs">
          <h3 class="faq-title">FAQs</h3>
          <p class="faq-question">Q: How does the dynamic programming approach work in this solution?</p>
          <p class="faq-answer">A: The dynamic programming approach uses an array 'dp' to keep track of the minimum number of coins needed to make each amount from 0 to the target amount. It iterates through each coin denomination and updates 'dp' based on the minimum number of coins required to make each amount.</p>
          <p class="faq-question">Q: What is the significance of setting dp[0] = 0?</p>
          <p class="faq-answer">A: Setting dp[0] = 0 means that it takes 0 coins to make an amount of 0, which is the base case for dynamic programming.</p>
      </div>
      <div class="test-cases">
          <h3 class="test-cases">Test Cases</h3>
          <h5>Test Case 1</h5>
          <p><strong>Input:</strong> coins = [1, 2, 5], amount = 11</p>
          <p><strong>Output:</strong> 3</p>
          <h5>Test Case 2</h5>
          <p><strong>Input:</strong> coins = [2], amount = 3</p>
          <p><strong>Output:</strong> -1</p>
      </div>
  </div>
  </div>
  `;

  const [loading, setLoading] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    subtopic: "",
    difficulty: "",
  });
  const [data, setData] = useState("");
  const handleSearchData = async () => {
    setLoading(true);
    let response = await fetch(
      `http://localhost:8082/generate-dsa-questions/?difficulty=${selectedOptions.difficulty}&topic=${selectedOptions.subtopic}&numofquestion=1`
    );
    let responseData = await response.json();
    setData(responseData.ans);
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
            Generate Random DSA Questions{" "}
            <Text as={"span"} color={"green.500"}>
              - Tailored to Your Needs
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            QGenius allows you to generate random Data Structures and Algorithms
            (DSA) questions. Select your preferred topic, difficulty level, and
            get questions tailored to your needs. You can also access detailed
            solutions, constraints, test cases, correct answers, FAQs, and more.
          </Text>
        </Stack>
      </Container>
      <DropDown
        type="dsa"
        setSelectedOptions={setSelectedOptions}
        selectedOptions={selectedOptions}
        handleSearchData={handleSearchData}
        loading={loading}
      />
      {loading ? (
        <Container mt={8}>
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        </Container>
      ) : data ? (
        <SearchAnswer answer={data} from="dsa" />
      ) : (
        ""
      )}
      <Footer />
    </ChakraProvider>
  );
}
