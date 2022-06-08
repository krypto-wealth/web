import type { DeriveAccountInfo } from '@polkadot/api-derive/types';
import type { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
export declare const useDeriveAccountInfo: (value?: string | AccountId | Address | AccountIndex | Uint8Array | null | undefined) => DeriveAccountInfo | undefined;
