import { type Chain } from "viem";

export const ENV_NETWORK = process.env.NEXT_PUBLIC_NETWORK as
  | "local"
  | "testnet"
  | "mainnet";

export const hyperliquidTestnet = {
  id: 998,
  name: "HyperEVM Testnet",
  nativeCurrency: {
    name: "HYPE",
    symbol: "HYPE",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.hyperliquid-testnet.xyz/evm"],
    },
    public: {
      http: ["https://rpc.hyperliquid-testnet.xyz/evm"],
    },
  },
  testnet: true,
} as const satisfies Chain;

// Setup using Anvil and Deploy.s.sol in HLN_protocol
export const hyperliquidLocalnet = {
  id: 31337,
  name: "HyperEVM Localnet",
  nativeCurrency: {
    name: "HYPE",
    symbol: "HYPE",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:8545"],
    },
    public: {
      http: ["http://127.0.0.1:8545"],
    },
  },
  testnet: true,
} as const satisfies Chain;

export const hyperliquidMainnet = {
  id: 999,
  name: "HyperEVM",
  nativeCurrency: {
    name: "HYPE",
    symbol: "HYPE",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.hyperliquid.xyz/evm"],
    },
    public: {
      http: ["https://rpc.hyperliquid.xyz/evm"],
    },
  },
  testnet: false,
} as const satisfies Chain;

// Export the appropriate provider configuration based on the environment variable
export const CHAIN_PROVIDER: Chain = (() => {
  switch (ENV_NETWORK) {
    case "local":
      return hyperliquidLocalnet;
    case "testnet":
      return hyperliquidTestnet;
    case "mainnet":
      return hyperliquidMainnet;
    default:
      return hyperliquidTestnet;
  }
})();
