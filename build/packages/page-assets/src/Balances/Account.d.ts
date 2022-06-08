/// <reference types="bn.js" />
import type { PalletAssetsAssetAccount } from '@polkadot/types/lookup';
import type { bool } from '@polkadot/types-codec';
import type { BN } from '@polkadot/util';
import React from 'react';
interface Account extends PalletAssetsAssetAccount {
    sufficient?: bool;
}
interface Props {
    account: Account;
    accountId: string;
    assetId: BN;
    className?: string;
    minBalance: BN;
    siFormat: [number, string];
}
declare function Account({ account: { balance, isFrozen, reason, sufficient }, accountId, assetId, className, minBalance, siFormat }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Account>;
export default _default;
