import { SButton } from '@/components/shared/SButton';
import { Alert, HStack, Input, InputGroup, Text, VStack } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Flex() {
  return (
    <VStack h="100svh" alignItems="center" justifyContent="center" gap="4rem">
      {/* <FlexIntro /> */}
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
    </VStack>
  );
}

export const FlexIntro = () => {
  return (
    <VStack bg="#fcd642" border="5px solid black" p="2rem" alignItems="flex-start" fontSize="2rem">
      Before we get started, make sure you have prepared.
      <Text>1. Your whale wallet. This wallet will never be made public.</Text>
      <Text>2. Your anon wallet with a .hl name. This wallet will be public.</Text>
      <Text>3. A light snack while you wait. Proof generation can take up to 5 minutes</Text>
    </VStack>
  );
};

export const Step1 = () => {
  return (
    <VStack>
      <Text fontSize="2rem">1. Connect your whale wallet</Text>
      <ConnectButton />
    </VStack>
  );
};

export const Step2 = () => {
  return (
    <VStack gap="1rem" w="full" maxW="500px">
      <Text fontSize="2rem">2. Sign the message</Text>
      <Text fontSize="1.5rem">You are a dolphin (1000-5000 HYPE)</Text>
      <VStack>
        <InputGroup endElement={'x'}>
          <Input
            placeholder="Enter your .hl name"
            borderRadius="0"
            border="3px solid black"
            fontSize="1.5rem"
            px="0.5rem"
            bg="#eeeeff77"
          />
        </InputGroup>
        <Alert.Root as={HStack} pr="0.5rem" pl="4px" py="4px" userSelect="none" status="warning">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>
              <Text>Make sure your public wallet controls the name</Text>
            </Alert.Title>
          </Alert.Content>
        </Alert.Root>
      </VStack>
      <SButton text="Sign" />
    </VStack>
  );
};

export const Step3 = () => {
  return (
    <VStack gap="1rem" w="full" maxW="500px">
      <Text fontSize="2rem">3. Generate ZK proof</Text>
      <Text fontSize="1.5rem">You are a dolphin (1000-5000 HYPE)</Text>
      <InputGroup endElement={'x'}>
        <Input
          placeholder="Enter your .hl name"
          borderRadius="0"
          border="3px solid black"
          fontSize="1.5rem"
          px="0.5rem"
          bg="#eeeeff77"
        />
      </InputGroup>
      <SButton text="Generate" />
    </VStack>
  );
};

export const Step4 = () => {
  return (
    <VStack>
      <Text fontSize="2rem">4. Connect your public wallet</Text>
      <ConnectButton />
    </VStack>
  );
};
export const Step5 = () => {
  return (
    <VStack gap="1.5rem">
      <Text fontSize="2rem">5. Attach proof to your .hl name</Text>
      <Text fontSize="1.5rem">You are a dolphin (1000-5000 HYPE)</Text>
      <Text fontSize="1.8rem">Attaching to xulian.hl</Text>
      <SButton text="Attach" />
    </VStack>
  );
};
