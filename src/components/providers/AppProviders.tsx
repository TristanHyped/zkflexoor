"use client";
import { system } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "@/constants/wagmiConfig";

import "@rainbow-me/rainbowkit/styles.css";

const dt = darkTheme({
  overlayBlur: "small",
  accentColor: "#51d2c1",
  accentColorForeground: "#000000",
  borderRadius: "large",
});

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={{
            ...dt,
            colors: {
              ...dt.colors,
              modalBackground: "#323341cf",
            },
          }}
        >
          <ChakraProvider value={system}>{children}</ChakraProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
