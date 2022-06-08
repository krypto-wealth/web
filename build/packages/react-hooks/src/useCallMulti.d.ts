import type { ApiPromise } from '@polkadot/api';
import type { QueryableStorageMultiArg } from '@polkadot/api/types';
interface CallOptions<T> {
    defaultValue?: T;
    transform?: (value: any, api: ApiPromise) => T;
}
export declare function useCallMulti<T>(calls?: QueryableStorageMultiArg<'promise'>[] | null | false, options?: CallOptions<T>): T;
export {};
