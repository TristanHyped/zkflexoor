import { Box, VStack, Text, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack py="2rem" px="3rem" gap="6rem">
      <VStack>
        <Text fontSize="4rem">ZK Flexoor</Text>
        <Text fontSize="2rem">
          Flex your HYPE Balance without doxxing your wallet address
        </Text>

        <Button
          px="4rem"
          size="xl"
          border="2px solid black"
          bg="transparent"
          color="black"
          fontSize="2rem"
          _hover={{
            bg: "gray.800/20",
          }}
          _active={{
            bg: "transparent !important",
          }}
          mt="2rem"
        >
          <Text>Get Started</Text>
        </Button>
      </VStack>

      <VStack w="50%" alignSelf="flex-start">
        <Text fontSize="4rem">What is ZK Flexoor?</Text>
        <Text fontSize="2rem">
          A fun, privacy‑preserving way to flex your HYPE balance without
          revealing your wallet address. You create a zero-knowledge proof that
          proves you hold above some number of HYPE and show off that status
          with an anonymous .hl name
        </Text>
      </VStack>
      <VStack w="50%" alignSelf="flex-end">
        <Text fontSize="4rem">How it works</Text>
        <Text fontSize="2rem">
          Prepare two wallets: whale and anon With the whale wallet, create the
          ZK proof With the anon wallet, attach the ZK proof to your .hl name
          Show how heavy your bag is
        </Text>
      </VStack>
      <VStack w="50%" alignSelf="flex-start">
        <Text fontSize="4rem">Keeping you secure</Text>
        <Box fontSize="2rem">
          <ul>
            <li>
              • Our custom built ZK proofs lets you prove your balance to anyone
              without revealing anything about the wallet
            </li>
            <li>
              • Our proof circuits are always open source: (link to github)
            </li>
            <li>
              • Proofs are generated client-side and entirely in your browser
            </li>
          </ul>
        </Box>
      </VStack>
    </VStack>
  );
}
