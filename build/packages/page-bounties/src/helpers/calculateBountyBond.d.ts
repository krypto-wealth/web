/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
export declare function calculateBountyBond(description: string, depositBase: BN, depositPerByte: BN): BN;
export declare function countUtf8Bytes(str: string): number;
