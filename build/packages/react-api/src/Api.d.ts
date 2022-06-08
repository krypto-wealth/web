import type { KeyringStore } from '@polkadot/ui-keyring/types';
import React from 'react';
import { ApiPromise } from '@polkadot/api';
interface Props {
    children: React.ReactNode;
    apiUrl: string;
    isElectron: boolean;
    store?: KeyringStore;
}
export declare const DEFAULT_DECIMALS: import("@polkadot/types-codec").u32;
export declare const DEFAULT_SS58: import("@polkadot/types-codec").u32;
export declare const DEFAULT_AUX: string[];
declare let api: ApiPromise;
export { api };
declare function Api({ apiUrl, children, isElectron, store }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Api>;
export default _default;
