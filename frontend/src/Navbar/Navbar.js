import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  useColorMode,
  Progress,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  SunIcon,
  MoonIcon,
  ChatIcon,
} from "@chakra-ui/icons";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import "./Navbar.css";

const Links = [
  { name: "Home", query: "" },
  { name: "DSA", query: "dsa" },
  { name: "Play Quiz", query: "quiz" },
  { name: "Questions Generator", query: "questions-generator" },
  { name: "Download Content", query: "content" },
];

export default function WithAction({ loading }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation(); // Get the current route location

  return (
    <>
      {loading && (
        <Progress
          size="sm"
          isIndeterminate
          position="sticky"
          top={0}
          colorScheme="green.500"
        />
      )}
      <Box px={5} py={3}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <ChakraLink
            as={ReactRouterLink}
            to="/"
            className="logo-container no-text-decoration"
          >
            <ChatIcon className="logo-icon" w={8} h={8} color="green.500" />
            <Box className="logo">QGenius</Box>
          </ChakraLink>

          <Flex alignItems={"center"} spacing={3} sx={{ gap: "1em" }}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Box>
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
              <HStack
                spacing={8}
                alignItems={"center"}
                justifyContent={"space-between"}
                w="100%"
              >
                <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                  fontSize="1.1rem"
                  fontWeight={600}
                >
                  {Links.map((link) => (
                    <ChakraLink
                      key={link.name}
                      as={ReactRouterLink}
                      to={"/" + link.query}
                      color={
                        location.pathname === "/" + link.query
                          ? "green.500"
                          : ""
                      }
                    >
                      {link.name}
                    </ChakraLink>
                  ))}
                </HStack>
              </HStack>
            </Box>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <ChakraLink
                  key={link.name}
                  as={ReactRouterLink}
                  to={"/" + link.query}
                  color={
                    location.pathname === "/" + link.query ? "green.500" : ""
                  }
                >
                  {link.name}
                </ChakraLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
