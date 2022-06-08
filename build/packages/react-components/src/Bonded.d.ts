/// <reference types="bn.js" />
import type { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';
import React from 'react';
export interface Props {
    bonded?: BN | BN[];
    className?: string;
    label?: React.ReactNode;
    params?: AccountId | AccountIndex | Address | string | Uint8Array | null;
    withLabel?: boolean;
}
declare function BondedDisplay(props: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof BondedDisplay>;
export default _default;
