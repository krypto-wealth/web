import type { PromiseResult, QueryableStorageEntry } from '@polkadot/api/types';
import type { AnyFunction } from '@polkadot/types/types';
import type { CallOptions, CallParams } from './types';
declare type TrackFnResult = Promise<unknown>;
declare type QueryFn = QueryableStorageEntry<'promise', []> | QueryableStorageEntry<'promise', []>['entries'] | QueryableStorageEntry<'promise', []>['keys'] | QueryableStorageEntry<'promise', []>['multi'];
export declare type TrackFn = PromiseResult<AnyFunction> | QueryFn;
export interface Tracker {
    error: Error | null;
    fn: TrackFn | undefined | null | false;
    isActive: boolean;
    serialized: string | null;
    subscriber: TrackFnResult | null;
    type: 'useCall' | 'useCallMulti';
}
interface TrackerRef {
    current: Tracker;
}
export declare function transformIdentity<T>(value: unknown): T;
export declare function handleError(error: Error, tracker: TrackerRef, fn?: unknown): void;
export declare function unsubscribe(tracker: TrackerRef): void;
export declare function throwOnError(tracker: Tracker): void;
export declare function useCall<T>(fn: TrackFn | undefined | null | false, params?: CallParams | null, options?: CallOptions<T>): T | undefined;
export {};
