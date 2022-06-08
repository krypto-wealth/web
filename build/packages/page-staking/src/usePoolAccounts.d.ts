/// <reference types="bn.js" />
import type { ApiPromise } from '@polkadot/api';
import type { BN } from '@polkadot/util';
import type { PoolAccounts } from './types';
export declare function createAccounts(api: ApiPromise, poolId: BN): PoolAccounts;
declare const _default: (poolId: BN) => PoolAccounts;
export default _default;
