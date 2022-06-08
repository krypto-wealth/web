/// <reference types="bn.js" />
import type { AccountId } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';
export declare function isClaimable(accounts: string[], beneficiary: AccountId, payoutDue: BN): boolean;
