/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
export interface Collator {
    accountId: string;
    deposit?: BN;
    isInvulnerable: boolean;
    lastBlock?: BN;
}
