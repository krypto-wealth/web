import type { SubmittableExtrinsic } from '@polkadot/api/types';
import type { BatchOptions } from './types';
export declare const useTxBatch: (txs?: false | SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>[] | null | undefined, options?: BatchOptions | undefined) => SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>[] | null;
