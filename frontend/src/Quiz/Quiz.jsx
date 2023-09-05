import React from "react";
import Navbar from "../Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

function Quiz() {
  return (
    <ChakraProvider>
      <Navbar />
      <div>Quiz</div>;
    </ChakraProvider>
  );
}

export default Quiz;
