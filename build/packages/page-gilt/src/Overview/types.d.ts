/// <reference types="bn.js" />
import type { ActiveGiltsTotal, BalanceOf } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';
export interface QueueTotal {
    balance: BalanceOf;
    index: number;
    numItems: BN;
}
export interface GiltInfo {
    activeIndex?: BN | null;
    activeTotal?: ActiveGiltsTotal;
    queueTotals?: QueueTotal[];
}
