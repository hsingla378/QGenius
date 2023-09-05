import React from "react";
import Navbar from "../Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

function DSA() {
  return (
    <ChakraProvider>
      <Navbar />
      <div>DSA</div>;
    </ChakraProvider>
  );
}

export default DSA;
