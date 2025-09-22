import assert from 'assert';

import { connectorsForWallets } from '@rainbow-me/rainbowkit';

import { CHAIN_PROVIDER, hyperliquidMainnet } from '@/config/providers';
import {
  braveWallet,
  coinbaseWallet,
  frameWallet,
  injectedWallet,
  metaMaskWallet,
  phantomWallet,
  rabbyWallet,
  rainbowWallet,
  trustWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { createConfig, http } from 'wagmi';

assert(process.env.NEXT_PUBLIC_WC_PROJECT_ID, 'Missing WalletConnet project ID');

/** Wallet Connectors
 * @returns The connectors
 */
const connectors = connectorsForWallets(
  [
    {
      groupName: 'Wallets',
      wallets: [
        injectedWallet,
        metaMaskWallet,
        rabbyWallet,
        // walletConnectWallet,
        frameWallet,
        braveWallet,
        phantomWallet,
        trustWallet,
        coinbaseWallet,
        rainbowWallet,
      ],
    },
  ],
  {
    appName: 'Hyperliquid Names',
    projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID,
  }
);

/** Wagmi Config
 * @returns The wagmi config
 */
export const wagmiConfig = createConfig({
  chains: [CHAIN_PROVIDER],
  transports: {
    [CHAIN_PROVIDER.id]: http(),
  },
  connectors: [...connectors],
});

export const HyperliquidProofRPC = 'https://rpc.purroofgroup.com';

export const hostNetwork = hyperliquidMainnet;
export const ETHRPC = 'https://docs-demo.quiknode.pro/';
