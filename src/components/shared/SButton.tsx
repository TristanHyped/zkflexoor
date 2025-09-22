import { Button, type ButtonProps, Text } from '@chakra-ui/react';

export const SButton = ({ text, ...props }: { text: string } & ButtonProps) => {
  return (
    <Button
      px="4rem"
      size="xl"
      border="2px solid black"
      bg="transparent"
      color="black"
      fontSize="2rem"
      _hover={{
        bg: 'gray.800/20',
      }}
      _active={{
        bg: 'transparent !important',
      }}
      {...props}
    >
      <Text>{text}</Text>
    </Button>
  );
};
