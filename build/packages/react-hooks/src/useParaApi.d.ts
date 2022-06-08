/// <reference types="bn.js" />
import type { LinkOption } from '@polkadot/apps-config/endpoints/types';
import type { BN } from '@polkadot/util';
import { ApiPromise } from '@polkadot/api';
interface Result {
    api?: ApiPromise | null;
    endpoints: LinkOption[];
    urls: string[];
}
export declare const useParaApi: (paraId: number | BN) => Result;
export {};
