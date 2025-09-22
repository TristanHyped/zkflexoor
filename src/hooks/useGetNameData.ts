import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { namehash, zeroAddress, zeroHash, type Address, type Hash } from 'viem';
import { useAccount } from 'wagmi';

import { viemHyperEvmClient } from '@/clients/viemClients';
import { registratorAbi } from '@/constants/abi/HLN_Registrator_v1.1.abi';
import { nameNFTAbi } from '@/constants/abi/HyperliquidNames.abi';
import {
  DEFAULT_LINKED_ADDRESSES,
  DEFAULT_TEXT_RECORDS,
  ENameStatus,
  HLNregistratorAddress,
  HyperliquidNamesAddress,
  ILinkedAddress,
  ITextRecords,
  type IName,
} from '@/hooks/types';
import { useGetPrimaryName } from '@/hooks/useGetPrimaryName';
import { HLify } from '@/utils/format';

interface GetNameDataProps {
  nameHash: Hash;
  labelHash: Hash;
}
interface GetNameStatusProps {
  owner: Address | undefined | null;
  address: Address | undefined;
  nameHash: Hash;
  isPrimaryName: boolean;
}

/**
 * Fetch and process name data from the HyperliquidNames contract.
 *
 * @param nameHash - The hash of the name to query.
 */
export const useGetNameData = (nameHash: Hash, labelHash: Hash = zeroHash) => {
  const { address } = useAccount();
  const { data: primaryNameData } = useGetPrimaryName(address);

  const {
    data: nameData,
    error,
    refetch,
    isPending,
  } = useQuery({
    queryKey: ['nameData', nameHash],
    queryFn: async () =>
      getNameData({
        nameHash,
        labelHash: labelHash,
      }),
    initialData: null,
    enabled: nameHash !== zeroHash,
  });

  const isPrimaryName = useMemo(() => {
    return nameHash === namehash(HLify(primaryNameData ?? ''));
  }, [nameHash, primaryNameData]);

  const status = useMemo(() => {
    if (!nameData || !nameData.owner) return ENameStatus.LOADING;
    return getNameStatus({
      owner: nameData.owner,
      address,
      isPrimaryName,
      nameHash,
    });
  }, [nameData, isPrimaryName, address]);

  const data = useMemo(() => {
    return { ...nameData, status } as IName;
  }, [nameData, status]);

  return { data, isLoading: isPending, error, refetch };
};
/**
 * Get the name data from the HyperliquidNames contract.
 * @param nameHash - The hash of the name to query.
 * @returns The name data.
 */
const getNameData = async ({ nameHash }: GetNameDataProps) => {
  if (nameHash === zeroHash) return null;
  const nameHashBigInt = BigInt(nameHash);

  const owner = await viemHyperEvmClient.readContract({
    address: HyperliquidNamesAddress,
    abi: nameNFTAbi,
    functionName: 'ownerOf',
    args: [nameHashBigInt],
  });

  const addresses = await viemHyperEvmClient.readContract({
    address: HyperliquidNamesAddress,
    abi: nameNFTAbi,
    functionName: 'tokenIdToAddress',
    args: [nameHashBigInt],
  });

  if (!owner || !addresses) return null;

  const textRecords = await getTextRecordJson(nameHash);

  const name = {
    owner: owner as Address,
    addresses: addresses as Address,
    textRecords,
  } as IName;

  return name;
};

/** Gets the Name Status
 * @param expiration - The expiration date of the name
 * @param owner - The owner of the name
 * @param address - The address of the user
 * @returns The status of the name
 */
const getNameStatus = ({ owner, address, isPrimaryName }: GetNameStatusProps) => {
  const now = new Date();
  // if name is minted
  if (owner !== zeroAddress) {
    // if name is expired

    if (owner === address) {
      if (isPrimaryName) return ENameStatus.PRIMARY;
      return ENameStatus.OWNED;
    }
    return ENameStatus.MINTED;
  }

  return ENameStatus.AVAILABLE;
};

const getTextRecordJson = async (namehash: Hash): Promise<ITextRecords> => {
  if (namehash === zeroHash || !namehash) {
    return DEFAULT_TEXT_RECORDS;
  }

  const textRecords = await viemHyperEvmClient.readContract({
    address: HLNregistratorAddress,
    abi: registratorAbi,
    functionName: 'getDataRecordJSON',
    args: [namehash],
  });

  try {
    const parsedTextRecords = JSON.parse(textRecords);

    const { chainAddresses: rawChainAddresses, ...otherRecords } = parsedTextRecords;

    const chainAddresses: ILinkedAddress = {
      ...DEFAULT_LINKED_ADDRESSES,
      ...(rawChainAddresses || {}),
    };

    return {
      chainAddresses,
      textRecords: otherRecords || {},
    } as ITextRecords;
  } catch (error) {
    console.error('Error parsing text records:', error);
    return DEFAULT_TEXT_RECORDS;
  }
};
