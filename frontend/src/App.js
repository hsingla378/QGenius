import "./App.css";
import Navbar from "./Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  );
}

export default App;
