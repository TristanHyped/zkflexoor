import { Address } from 'viem';

export interface ILinkedChain {
  symbol: string;
  name: string;
  logo: string;
}

export enum ELinkedAddresses {
  BTC = '0',
  SOL = '501',
  ETH = '60', // @todo double check this
}

export interface ILinkedAddress {
  [ELinkedAddresses.BTC]: string;
  [ELinkedAddresses.SOL]: string;
  [ELinkedAddresses.ETH]: string;
}

export const EXTERNAL_CHAINS: Record<ELinkedAddresses, ILinkedChain> = {
  [ELinkedAddresses.BTC]: {
    symbol: 'BTC',
    name: 'Bitcoin',
    logo: '/assets/logos/assets/btc.svg',
  },
  [ELinkedAddresses.SOL]: {
    symbol: 'SOL',
    name: 'Solana',
    logo: '/assets/logos/assets/sol.png',
  },
  [ELinkedAddresses.ETH]: {
    symbol: 'ETH',
    name: 'Ethereum',
    logo: '/assets/logos/assets/eth.svg',
  },
};

export const DEFAULT_LINKED_ADDRESSES: Record<ELinkedAddresses, string> = {
  [ELinkedAddresses.BTC]: '',
  [ELinkedAddresses.SOL]: '',
  [ELinkedAddresses.ETH]: '',
};

export interface ITextRecords {
  chainAddresses: ILinkedAddress;
  textRecords: Record<string, string>;
}

export const DEFAULT_TEXT_RECORDS: ITextRecords = {
  chainAddresses: DEFAULT_LINKED_ADDRESSES,
  textRecords: {},
};

export interface ITextRecord {
  key: string;
  value: string;
}

export const TEXT_RECORD_LIMIT = 2;
export const PROHIBITED_RECORD_KEYS = ['chainAddresses', 'chainaddresses'];

export interface IName {
  owner: Address | null;
  addresses: Address | null;
  status: ENameStatus;
  textRecords: ITextRecords;
}

export enum ENameStatus {
  AVAILABLE = 'Available',
  NOT_WHITELISTED = 'not_whitelisted',
  OWNED = 'Owned',
  CONTROLLED = 'Controlled',
  UNCONTROLLED = 'Uncontrolled',
  PRIMARY = 'primary_name',
  MINTED = 'Registered',
  EXPIRED = 'Expired',
  INVALID = 'Invalid',
  AUCTION = 'Auction',
  LOADING = 'Loading',
  PAUSED = 'Paused',
}

export const HyperliquidNamesAddress =
  '0x1d9d87eBc14e71490bB87f1C39F65BDB979f3cb7';
export const HLNregistratorAddress =
  '0xba3e19716e3Fb887CFB6c9028E7f36D6b761c3C1';
