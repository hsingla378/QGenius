import React from "react";
import ReactDOM from "react-dom/client";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

export default function SearchBox({ SetAnswer }) {
  const [show, setShow] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const handleSearchButton = () => {
    SetAnswer();
    console.log(searchQuery);
  };

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "text"}
        placeholder="Enter password"
        onChange={handleSearchQuery}
        value={searchQuery}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleSearchButton}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
