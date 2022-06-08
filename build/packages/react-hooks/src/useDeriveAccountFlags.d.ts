import type { DeriveAccountFlags } from '@polkadot/api-derive/types';
import type { AccountId, Address } from '@polkadot/types/interfaces';
export declare const useDeriveAccountFlags: (value?: string | AccountId | Address | Uint8Array | null | undefined) => DeriveAccountFlags | undefined;
