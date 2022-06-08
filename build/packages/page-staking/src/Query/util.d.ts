/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
interface ToBN {
    toBn: () => BN;
}
export declare function balanceToNumber(amount: BN | ToBN | undefined, divisor: BN): number;
export {};
