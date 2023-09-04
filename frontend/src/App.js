import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import LandingPage from "./LandingPage/LandingPage";


function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <LandingPage />
    </ChakraProvider>
  );
}

export default App;
