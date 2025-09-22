export const registratorAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_minter',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_hln',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'coinTypes',
    inputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'dataRecords',
    inputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: 'key_1',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'value_1',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'key_2',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'value_2',
        type: 'string',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'expiry',
    inputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'extend',
    inputs: [
      {
        name: '_namehash',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: '_newExpiry',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'getChainAddr',
    inputs: [
      {
        name: '_nameHash',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: '_coinType',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getCoinTypes',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256[]',
        internalType: 'uint256[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getDataRecordJSON',
    inputs: [
      {
        name: '_nameHash',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'string',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getFullRecordJSON',
    inputs: [
      {
        name: '_nameHash',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'string',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getNameRecordJSON',
    inputs: [
      {
        name: '_nameHash',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'string',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'isExpired',
    inputs: [
      {
        name: '_namehash',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'isRegistered',
    inputs: [
      {
        name: '_namehash',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'issueName',
    inputs: [
      {
        name: '_nameHash',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: '_domain',
        type: 'string',
        internalType: 'string',
      },
      {
        name: '_recipient',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_newExpiry',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'iterators',
    inputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'minters',
    inputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'owner',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'ownerOf',
    inputs: [
      {
        name: '_namehash',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'paused',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'reIssueName',
    inputs: [
      {
        name: '_nameHash',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: '_domain',
        type: 'string',
        internalType: 'string',
      },
      {
        name: '_recipient',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_newExpiry',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'renounceOwnership',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setChainAddr',
    inputs: [
      {
        name: '_nameHash',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: '_coinType',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_chainAddr',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setCoinType',
    inputs: [
      {
        name: '_coinType',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_enabled',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setIterator',
    inputs: [
      {
        name: '_iterator',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_approved',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setMinter',
    inputs: [
      {
        name: '_minter',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_approved',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'transferOwnership',
    inputs: [
      {
        name: 'newOwner',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'updateDataRecordByController',
    inputs: [
      {
        name: '_namehash',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'key_1',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'value_1',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'key_2',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'value_2',
        type: 'string',
        internalType: 'string',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'ChainAddressAdded',
    inputs: [
      {
        name: 'nameHash',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'coinType',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'chainAddr',
        type: 'bytes',
        indexed: false,
        internalType: 'bytes',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'CoinTypeSet',
    inputs: [
      {
        name: 'coinType',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'enabled',
        type: 'bool',
        indexed: false,
        internalType: 'bool',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ExpiryChanged',
    inputs: [
      {
        name: 'nameHash',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'expiry',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'OwnershipTransferred',
    inputs: [
      {
        name: 'previousOwner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'newOwner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Paused',
    inputs: [
      {
        name: 'account',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'RecordCreated',
    inputs: [
      {
        name: 'nameHash',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'domain',
        type: 'string',
        indexed: false,
        internalType: 'string',
      },
      {
        name: 'owner',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
      {
        name: 'expiry',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Unpaused',
    inputs: [
      {
        name: 'account',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'dataRecordCreated',
    inputs: [
      {
        name: 'nameHash',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'key_1',
        type: 'string',
        indexed: false,
        internalType: 'string',
      },
      {
        name: 'value_1',
        type: 'string',
        indexed: false,
        internalType: 'string',
      },
      {
        name: 'key_2',
        type: 'string',
        indexed: false,
        internalType: 'string',
      },
      {
        name: 'value_2',
        type: 'string',
        indexed: false,
        internalType: 'string',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'dataRecordUpdated',
    inputs: [
      {
        name: 'nameHash',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'key_1',
        type: 'string',
        indexed: false,
        internalType: 'string',
      },
      {
        name: 'value_1',
        type: 'string',
        indexed: false,
        internalType: 'string',
      },
      {
        name: 'key_2',
        type: 'string',
        indexed: false,
        internalType: 'string',
      },
      {
        name: 'value_2',
        type: 'string',
        indexed: false,
        internalType: 'string',
      },
    ],
    anonymous: false,
  },
  {
    type: 'error',
    name: 'CoinTypeNotEnabled',
    inputs: [],
  },
  {
    type: 'error',
    name: 'EnforcedPause',
    inputs: [],
  },
  {
    type: 'error',
    name: 'ExpectedPause',
    inputs: [],
  },
  {
    type: 'error',
    name: 'IncorrectExpiry',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MinterOnly',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NonexistentRecord',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotAuthorized',
    inputs: [],
  },
  {
    type: 'error',
    name: 'OnlyTokenContract',
    inputs: [],
  },
  {
    type: 'error',
    name: 'OwnableInvalidOwner',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'error',
    name: 'OwnableUnauthorizedAccount',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'error',
    name: 'StringsInsufficientHexLength',
    inputs: [
      {
        name: 'value',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'length',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
  },
] as const;
