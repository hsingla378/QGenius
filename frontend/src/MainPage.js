import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import LandingPage from "./LandingPage/LandingPage";
import { useState } from "react";

function MainPage() {
  const [loading, setLoading] = useState(false);

  return (
    <ChakraProvider>
      <Navbar loading={loading} />
      <LandingPage loading={loading} setLoading={setLoading} />
    </ChakraProvider>
  );
}

export default MainPage;
