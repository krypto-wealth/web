/// <reference types="bn.js" />
import type { ProxyDefinition } from '@polkadot/types/interfaces';
import type { KeyringAddress } from '@polkadot/ui-keyring/types';
import type { AccountBalance, Delegation } from '../types';
import React from 'react';
import { BN } from '@polkadot/util';
interface Props {
    account: KeyringAddress;
    className?: string;
    delegation?: Delegation;
    filter: string;
    isFavorite: boolean;
    proxy?: [ProxyDefinition[], BN];
    setBalance: (address: string, value: AccountBalance) => void;
    toggleFavorite: (address: string) => void;
}
declare function Account({ account: { address, meta }, className, delegation, filter, isFavorite, proxy, setBalance, toggleFavorite }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Account, any, {}, never>>;
export default _default;
