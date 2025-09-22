'use client';
import { SButton } from '@/components/shared/SButton';
import { useFlexoor } from '@/contexts/FlexoorContext';
import { GenerateProof } from '@/screens/Flex/Steps/GenerateProof';
import { Text, VStack } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/navigation';

export const FlexScreen = () => {
  const { step } = useFlexoor();
  return (
    <VStack h="100svh" alignItems="center" justifyContent="center" gap="4rem" my="400px">
      {/* {step === 0 && <FlexIntro />}
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
      {step === 5 && <Step5 />}
      {step === 6 && <Step6 />} */}
      <FlexIntro />
      <Step1 />
      {/* <Step2 /> */}
      <GenerateProof />
      <Step3 />
      <Step4 />
      <Step5 />
      {/* Step: {step} */}
    </VStack>
  );
};

export const FlexIntro = () => {
  const { setStep } = useFlexoor();
  return (
    <VStack
      bg="#fcd642"
      border="5px solid black"
      p="2rem"
      alignItems="flex-start"
      fontSize="1.5rem"
      gap="1rem"
    >
      <Text>Before we get started, make sure you have prepared.</Text>
      <Text>1. Your whale wallet. This wallet will never be made public.</Text>
      <Text>2. Your anon wallet with a .hl name. This wallet will be public.</Text>
      <Text>3. A light snack while you wait. Proof generation can take up to 5 minutes</Text>
      <SButton text="Lets go!" alignSelf="center" mt="1rem" onClick={() => setStep(1)} />
    </VStack>
  );
};

export const Step1 = () => {
  const { setStep } = useFlexoor();

  return (
    <VStack gap="1rem">
      <Text fontSize="2rem">1. Connect your whale wallet</Text>
      <ConnectButton />
      <SButton text="Next" onClick={() => setStep(2)} />
    </VStack>
  );
};

// export const Step2 = () => {
//   const { hlnInput, setHlnInput, tier, isHlnValid } = useFlexoor();
//   return (
//     <VStack gap="2rem" w="full" maxW="500px">
//       <Text fontSize="2rem">2. Sign the message</Text>
//       <Text fontSize="1.5rem">
//         You are a {tier.name} ({tier.min}-{tier.max} HYPE)
//       </Text>
//       <VStack>
//         <InputGroup
//           endElement={
//             <Box w="20px" h="20px" display="flex" alignItems="center" justifyContent="center">
//               {isHlnValid ? <CheckIcon color="green" /> : <XIcon color="red" />}
//             </Box>
//           }
//         >
//           <Input
//             placeholder="Enter your .hl name"
//             borderRadius="0"
//             border="3px solid black"
//             fontSize="1.5rem"
//             px="0.5rem"
//             bg="#eeeeff77"
//             value={hlnInput}
//             onChange={(e) => setHlnInput(e.target.value)}
//           />
//         </InputGroup>
//       </VStack>
//     </VStack>
//   );
// };

export const Step3 = () => {
  const { setStep } = useFlexoor();
  return (
    <VStack gap="1.5rem">
      <Text fontSize="2rem">3. Connect your public wallet</Text>
      <ConnectButton />
      <SButton text="Next" onClick={() => setStep(4)} />
    </VStack>
  );
};

export const Step4 = () => {
  const { attachProof, tier, hlnInput, status } = useFlexoor();
  return (
    <VStack gap="1.5rem">
      <Text fontSize="2rem">4. Attach proof to your .hl name</Text>
      <Text fontSize="1.5rem">
        You are a {tier.name} ({tier.min}-{tier.max} HYPE)
      </Text>
      <Text fontSize="1.8rem">Attaching to {hlnInput}</Text>
      <SButton text="Attach" onClick={attachProof} disabled={status !== 'Proof ready'} />
    </VStack>
  );
};

export const Step5 = () => {
  const router = useRouter();
  return (
    <VStack gap="1.5rem">
      <Text fontSize="2rem">Done! </Text>
      <Text fontSize="1.5rem">Your proof is attached to your .hl name</Text>
      <SButton text="View Leaderboard" onClick={() => router.push('/leaderboard')} />
    </VStack>
  );
};
