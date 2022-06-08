/// <reference types="bn.js" />
import type { DeriveStakerReward } from '@polkadot/api-derive/types';
import type { Balance, EraIndex } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';
export interface PayoutEraValidator {
    era: EraIndex;
    stashes: Record<string, Balance>;
}
export interface PayoutValidator {
    available: BN;
    eras: PayoutEraValidator[];
    validatorId: string;
    total: BN;
}
export interface PayoutStash {
    available: BN;
    rewards: DeriveStakerReward[];
    stashId: string;
}
