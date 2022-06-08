import type { QueryableStorageEntry } from '@polkadot/api/types';
interface Options<T> {
    transform?: (value: any[]) => T[];
}
export declare function useMapKeys<T = any>(entry?: QueryableStorageEntry<'promise'> | null | false, { transform }?: Options<T>, at?: string | null | false): T[] | undefined;
export {};
