import { hostNetwork } from '@/config/wagmiConfig';
import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';

export const viemEthClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

export const viemHyperEvmClient = createPublicClient({
  chain: hostNetwork,
  transport: http(),
});
