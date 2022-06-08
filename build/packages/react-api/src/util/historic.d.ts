import type { Hash } from '@polkadot/types/interfaces';
import type { Codec } from '@polkadot/types/types';
declare type AtQuery<I extends unknown[]> = (hash: string | Uint8Array, ...params: I) => Promise<Codec>;
export default function getHistoric<T extends Codec, I extends unknown[] = unknown[]>(atQuery: AtQuery<I>, params: I, hashes: Hash[]): Promise<[Hash, T][]>;
export {};
