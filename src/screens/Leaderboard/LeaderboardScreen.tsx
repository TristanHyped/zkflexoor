'use client';

import { useGetLeaderboardEntries } from '@/hooks/useGetLeaderboardEntries';
import { Flex, Text, VStack } from '@chakra-ui/react';

export const LeaderboardScreen = () => {
  const { data } = useGetLeaderboardEntries();
  return (
    <VStack>
      {data.map((entry) => (
        <Flex key={entry.id}>
          <Text>{entry.name}</Text>
          <Text>{entry.tier}</Text>
        </Flex>
      ))}
    </VStack>
  );
};
