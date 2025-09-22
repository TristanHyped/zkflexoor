'use client';
import { SButton } from '@/components/shared/SButton';
import { Box, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <VStack py="6rem" px="3rem" gap="6rem">
      <VStack>
        <Text fontSize="4rem">ZK Flexoor</Text>
        <Text fontSize="2rem">Flex your HYPE Balance without doxxing your wallet address</Text>

        <SButton text="Get Started" mt="2rem" onClick={() => router.push('/flex')} />
      </VStack>

      <VStack w="50%" alignSelf="flex-start">
        <Text fontSize="4rem">What is ZK Flexoor?</Text>
        <Text fontSize="2rem">
          A fun, privacy‑preserving way to flex your HYPE balance without revealing your wallet address. You
          create a zero-knowledge proof that proves you hold above some number of HYPE and show off that
          status with an anonymous .hl name
        </Text>
      </VStack>
      <VStack w="50%" alignSelf="flex-end">
        <Text fontSize="4rem">How it works</Text>
        <Text fontSize="2rem">
          Prepare two wallets: whale and anon With the whale wallet, create the ZK proof With the anon
          wallet, attach the ZK proof to your .hl name Show how heavy your bag is
        </Text>
      </VStack>
      <VStack w="50%" alignSelf="flex-start">
        <Text fontSize="4rem">Keeping you secure</Text>
        <Box fontSize="2rem">
          <ul>
            <li>
              • Our custom built ZK proofs lets you prove your balance to anyone without revealing anything
              about the wallet
            </li>
            <li>• Our proof circuits are always open source: (link to github)</li>
            <li>• Proofs are generated client-side and entirely in your browser</li>
          </ul>
        </Box>
      </VStack>
      <SButton text="Get Started" mt="2rem" onClick={() => router.push('/flex')} />
    </VStack>
  );
}
