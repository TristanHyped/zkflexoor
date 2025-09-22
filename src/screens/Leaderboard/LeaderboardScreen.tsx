'use client';

import { useGetLeaderboardEntries } from '@/hooks/useGetLeaderboardEntries';
import { Flex, Text, VStack } from '@chakra-ui/react';

export const LeaderboardScreen = () => {
  const { data } = useGetLeaderboardEntries();
  return (
    <VStack gap="1.5rem" py="2rem">
      <Text fontSize="2rem" fontWeight="bold" mb="2rem">
        Leaderboard
      </Text>

      {data.map((entry) => (
        <Flex key={entry.id} gap="1rem" fontSize="1.5rem">
          <Text>{entry.name}</Text>
          <Text>{entry.tier}</Text>
        </Flex>
      ))}
    </VStack>
  );
};
