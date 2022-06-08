/// <reference types="bn.js" />
import type { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import type { KeyringItemType } from '@polkadot/ui-keyring/types';
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    balance?: BN | BN[];
    bonded?: BN | BN[];
    children?: React.ReactNode;
    className?: string;
    iconInfo?: React.ReactNode;
    isHighlight?: boolean;
    isPadded?: boolean;
    isShort?: boolean;
    label?: React.ReactNode;
    labelBalance?: React.ReactNode;
    nameExtra?: React.ReactNode;
    onNameClick?: () => void;
    summary?: React.ReactNode;
    type?: KeyringItemType;
    value?: AccountId | AccountIndex | Address | string | null | Uint8Array;
    withAddress?: boolean;
    withBalance?: boolean;
    withBonded?: boolean;
    withLockedVote?: boolean;
    withSidebar?: boolean;
    withName?: boolean;
    withShrink?: boolean;
}
declare function AddressMini({ balance, bonded, children, className, iconInfo, isHighlight, isPadded, label, labelBalance, nameExtra, onNameClick, summary, value, withAddress, withBalance, withBonded, withLockedVote, withName, withShrink, withSidebar }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof AddressMini, any, {}, never>>;
export default _default;
