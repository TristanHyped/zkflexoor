import { wagmiConfig } from '@/config/wagmiConfig';
import { registratorAbi } from '@/constants/abi/HLN_Registrator_v1.1.abi';
import { useState } from 'react';
import { simulateContract, waitForTransactionReceipt, writeContract } from 'wagmi/actions';
import { HLNregistratorAddress } from './types';

/**
 * Hook to update the address of a name
 * @param namehash - The hash of the name
 * @param newValue1 - The new value for the first text record
 * @param newValue2 - The new value for the second text record
 * @param name - The name
 * @returns The write function and the loading state
 */
export const useUpdateTextRecordByController = (
  namehash: `0x${string}`,
  key1: string,
  value1: string,
  key2: string,
  value2: string,
  onSuccess: () => void
) => {
  const contractConfig = {
    address: HLNregistratorAddress,
    abi: registratorAbi,
    functionName: 'updateDataRecordByController',
    args: [namehash, key1, value1, key2, value2],
  } as const;

  const [isLoading, setIsLoading] = useState(false);

  const write = async () => {
    setIsLoading(true);
    const { request } = await simulateContract(wagmiConfig, contractConfig as any);
    const hash = await writeContract(wagmiConfig, request);
    const receipt = await waitForTransactionReceipt(wagmiConfig, { hash });
    if (receipt.status === 'success') {
      onSuccess();
    }
    setIsLoading(false);
  };

  return { write, isLoading };
};
