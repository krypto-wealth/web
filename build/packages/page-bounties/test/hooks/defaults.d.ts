/// <reference types="bn.js" />
import { BN } from '@polkadot/util';
import { BountyApi } from '../../src/hooks';
export declare const defaultBountyUpdatePeriod: BN;
export declare const defaultBountyApi: BountyApi;
export declare const mockBountyHooks: {
    balance: import("@polkadot/types-codec").u128;
    bountyApi: BountyApi;
};
