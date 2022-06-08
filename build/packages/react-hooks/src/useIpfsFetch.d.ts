import '@polkadot/x-textencoder/shim';
import '@polkadot/x-textdecoder/shim';
import type { CallOptions } from './types';
interface Options<T> extends CallOptions<T> {
    transform?: (value: any) => T;
}
export declare function useIpfsFetch<T>(hashes: string[] | undefined, options?: Options<T>): Map<string, T> | undefined;
export {};
