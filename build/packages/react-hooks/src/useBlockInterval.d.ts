/// <reference types="bn.js" />
import type { ApiPromise } from '@polkadot/api';
import { BN } from '@polkadot/util';
export declare const useBlockInterval: (apiOverride?: ApiPromise | null | undefined) => BN;
