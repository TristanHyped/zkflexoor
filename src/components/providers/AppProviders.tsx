"use client";
import { system } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
