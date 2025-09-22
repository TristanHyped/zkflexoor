import { viemHyperEvmClient } from '@/clients/viemClients';
import { nameNFTAbi } from '@/constants/abi/HyperliquidNames.abi';
import { useQuery } from '@tanstack/react-query';

import { Address, getContract } from 'viem';
import { HyperliquidNamesAddress } from './types';

export const useGetPrimaryName = (address: Address | undefined) => {
  const { data, isPending, error, refetch } = useQuery({
    queryKey: ['primaryNameData', address],
    queryFn: () => getPrimaryName(address),
    initialData: null,
    enabled: !!address,
  });

  return { data, isPending, error, refetch };
};

export async function getPrimaryName(
  address: Address | undefined
): Promise<string | null> {
  if (!address) return null;
  try {
    const contract = getContract({
      address: HyperliquidNamesAddress,
      abi: nameNFTAbi,
      client: viemHyperEvmClient,
    });

    // Resolve to address
    let primaryName = (await contract.read.primaryName([address])) as string;

    return primaryName;
  } catch (error) {
    console.error('Error getting primary name:', error);
    throw error;
  }
}
