import React from "react";
import Navbar from "../Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";


function Questions() {
  return (
    <ChakraProvider>
      <Navbar />
      <div>Questions</div>;
    </ChakraProvider>
  );
}

export default Questions;
