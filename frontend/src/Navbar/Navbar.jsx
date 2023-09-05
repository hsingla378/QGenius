"use client";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Progress,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  SunIcon,
  MoonIcon,
} from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

import "./Navbar.css";

const Links = [
  { name: "DSA", query: "dsa" },
  { name: "Play Quiz", query: "quiz" },
  { name: "Questions Generator", query: "questions-generator" },
];

const NavLink = (props) => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        // bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Progress size="sm" isIndeterminate position="sticky" top={0} />
      <Box
        // bg={useColorModeValue("gray.100", "gray.900")}
        px={5}
        py={3}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <ChakraLink
            as={ReactRouterLink}
            to="/"
            className="logo"
            sx={{ textDecoration: "none" }}
          >
            <Box>QGenius</Box>
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
                    <ChakraLink as={ReactRouterLink} to={"/" + link.query}>
                      <NavLink key={link.name}>{link.name}</NavLink>
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
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
