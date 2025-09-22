import { SButton } from '@/components/shared/SButton';
import { useFlexoor } from '@/contexts/FlexoorContext';
import { Alert, HStack, Input, InputGroup, Text, VStack } from '@chakra-ui/react';

export const GenerateProof = () => {
  const { handleGenerate, hlnInput, status, setHlnInput, isGenerating } = useFlexoor();
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
          value={hlnInput}
          disabled={isGenerating}
          onChange={(e) => setHlnInput(e.target.value)}
        />
      </InputGroup>
      <Alert.Root as={HStack} mt="-0.5rem" pr="0.5rem" pl="4px" py="4px" userSelect="none" status="warning">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>
            <Text>Make sure your public wallet controls the name</Text>
          </Alert.Title>
        </Alert.Content>
      </Alert.Root>
      <Text fontSize="1.5rem">{status}</Text>
      <SButton text="Generate" onClick={handleGenerate} loading={isGenerating} />
    </VStack>
  );
};
