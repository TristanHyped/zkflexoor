export type TierName =
  | 'crab'
  | 'shrimp'
  | 'mackerel'
  | 'tuna'
  | 'dolphin'
  | 'shark'
  | 'whale'
  | 'leviathan';
export type Tier = {
  min: number;
  max: number;
  name: string;
};

export const tiers: Record<TierName, Tier> = {
  crab: {
    min: 0,
    max: 99,
    name: 'Crab',
  },
  shrimp: {
    min: 100,
    max: 999,
    name: 'Shrimp',
  },
  mackerel: {
    min: 1000,
    max: 4999,
    name: 'Mackerel',
  },
  tuna: {
    min: 5000,
    max: 9999,
    name: 'Tuna',
  },
  dolphin: {
    min: 10000,
    max: 49999,
    name: 'Dolphin',
  },
  shark: {
    min: 50000,
    max: 99999,
    name: 'Shark',
  },
  whale: {
    min: 100000,
    max: 499999,
    name: 'Whale',
  },
  leviathan: {
    min: 500000,
    max: Number.MAX_SAFE_INTEGER,
    name: 'Leviathan',
  },
};

export const getTier = (balance: number) => {
  for (const tier of Object.keys(tiers) as TierName[]) {
    if (balance >= tiers[tier].min && balance <= tiers[tier].max) {
      return tiers[tier];
    }
  }
  return tiers.crab;
};
