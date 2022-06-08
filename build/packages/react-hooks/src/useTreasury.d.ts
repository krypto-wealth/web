/// <reference types="bn.js" />
import type { Balance } from '@polkadot/types/interfaces';
import { BN } from '@polkadot/util';
interface Result {
    value?: Balance;
    burn?: BN;
    pendingBounties: BN;
    pendingProposals: BN;
    spendPeriod: BN;
    totalProposals?: number;
    treasuryAccount: Uint8Array;
}
export declare const useTreasury: () => Result;
export {};
