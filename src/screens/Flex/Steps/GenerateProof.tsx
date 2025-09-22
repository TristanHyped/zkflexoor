import { SButton } from '@/components/shared/SButton';
import { useFlexoor } from '@/contexts/FlexoorContext';
import {
  Alert,
  Box,
  chakra,
  HStack,
  Input,
  InputGroup,
  Progress,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaCheck, FaXmark } from 'react-icons/fa6';

const XIcon = chakra(FaXmark);
const CheckIcon = chakra(FaCheck);

export const GenerateProof = () => {
  const {
    hlnInput,
    status,
    isHlnLoading,
    tier,
    isGenerating,
    progress,
    isHlnValid,
    handleGenerate,
    setHlnInput,
  } = useFlexoor();
  return (
    <VStack gap="1rem" w="full" maxW="500px">
      <Text fontSize="2rem">3. Generate ZK proof</Text>
      <Text fontSize="1.5rem">
        You are a {tier.name} ({tier.min}-{tier.max} HYPE)
      </Text>
      <InputGroup
        endElement={
          <Box w="20px" h="20px" mr="5px" display="flex" alignItems="center" justifyContent="center">
            {hlnInput === '' ? null : isHlnLoading ? (
              <Spinner />
            ) : isHlnValid ? (
              <CheckIcon color="green.600" />
            ) : (
              <XIcon color="red.600" />
            )}
          </Box>
        }
      >
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
      <Progress.Root value={progress} w="100%" colorPalette="cyan" striped>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
      <Text fontSize="1.5rem">{status}</Text>
      <SButton text="Generate" onClick={handleGenerate} loading={isGenerating} disabled={!isHlnValid} />
    </VStack>
  );
};
