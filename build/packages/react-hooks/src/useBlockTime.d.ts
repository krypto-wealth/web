/// <reference types="bn.js" />
import type { ApiPromise } from '@polkadot/api';
import type { Time } from '@polkadot/util/types';
import { BN } from '@polkadot/util';
declare type Result = [number, string, Time];
export declare const useBlockTime: (blocks?: number | BN | undefined, apiOverride?: ApiPromise | null | undefined) => Result;
export {};
