import type { SubmittableExtrinsicFunction } from '@polkadot/api/types';
declare type ExtrinsicCheck = SubmittableExtrinsicFunction<'promise'> | false | undefined | null;
export declare const useExtrinsicTrigger: (checks: ExtrinsicCheck[]) => string;
export {};
