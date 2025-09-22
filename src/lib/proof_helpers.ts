import { HyperliquidProofRPC, wagmiConfig } from '@/config/wagmiConfig';
import { innner_layer_vk } from '@/target/verification_keys';
import { getAccount, getProof } from '@wagmi/core';
import { Buffer } from 'buffer';
import { ethers } from 'ethers';
import { createPublicClient, http } from 'viem';

export function uint8ArrayToStringArray(uint8Array: Uint8Array) {
  return Array.from(uint8Array).map((s) => s.toString());
}

export function hexStringToStringUint8Array(hexString: string) {
  const str = Uint8Array.from(Buffer.from(hexString, 'hex'));
  return uint8ArrayToStringArray(str);
}
export function zero_proof() {
  const zero = '0x0000000000000000000000000000000000000000000000000000000000000000';
  const result = [];
  for (let index = 0; index < 456; index++) {
    result.push(zero);
  }
  return result;
}

export function zero_public_input() {
  const zero = '0x0000000000000000000000000000000000000000000000000000000000000000';
  const result = [];
  for (let index = 0; index < 1; index++) {
    result.push(zero);
  }
  return result;
}

export function getInitialPublicInputs(trie_key: number[], _root: number[]) {
  const trie_key_start_index = '0x0000000000000000000000000000000000000000000000000000000000000000';
  const padded_trie_key: string[] = [];
  trie_key.forEach((e) => {
    padded_trie_key.push('0x' + (+e).toString(16).padStart(64, '0'));
  });
  const root: string[] = [];
  _root.forEach((e) => {
    root.push('0x' + (+e).toString(16).padStart(64, '0'));
  });
  const initial_inputs = [];
  root.forEach((e) => {
    initial_inputs.push(e);
  });
  padded_trie_key.forEach((e) => {
    initial_inputs.push(e);
  });
  initial_inputs.push(trie_key_start_index);
  root.forEach((e) => {
    initial_inputs.push(e);
  });
  for (let index = 0; index < 112; index++) {
    initial_inputs.push('0x0000000000000000000000000000000000000000000000000000000000000000');
  }
  console.log(initial_inputs);
  return initial_inputs;
}

export function getInitialPlaceHolderInput() {
  return innner_layer_vk;
}

export function bigintToUint8Array(value: bigint): number[] {
  let hex = value.toString(16);
  if (hex.length % 2 == 1) hex = '0' + hex;
  const len = Math.ceil(hex.length / 2);
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  const u8: number[] = new Array(len);
  for (let i = 0; i < len; i++) {
    u8[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return u8;
}

export function buf2Bigint(buffer: ArrayBuffer) {
  // buffer is an ArrayBuffer
  return ethers.formatUnits(
    '0x' + [...new Uint8Array(buffer)].map((x) => x.toString(16).padStart(2, '0')).join('')
  );
}

export function shortenHash(hash: string, chars = 6) {
  if (!hash) return '';
  return `${hash.slice(0, chars)}...${hash.slice(-chars)}`;
}

// Define Hyperliquid config
const HYPERLIQUID_CHAIN_ID = 999; // <-- replace with real chain id

export async function getProofWithCustomRpc(request: {
  address: `0x${string}`;
  blockNumber: bigint;
  storageKeys: `0x${string}`[];
}) {
  const account = getAccount(wagmiConfig);

  if (account.chainId === HYPERLIQUID_CHAIN_ID) {
    // 🔥 bypass wagmi + use direct viem client
    const client = createPublicClient({
      transport: http(HyperliquidProofRPC),
      chain: {
        id: HYPERLIQUID_CHAIN_ID,
        name: 'Hyperliquid',
        nativeCurrency: { name: 'HYPE', symbol: 'HYPE', decimals: 18 },
        rpcUrls: { default: { http: [HyperliquidProofRPC] } },
      },
    });

    return client.getProof({
      address: request.address,
      storageKeys: request.storageKeys,
      blockTag: 'latest',
    });
  }

  // default path: use wagmi
  return getProof(wagmiConfig, request);
}
