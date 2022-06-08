/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    accountId: string;
    assetId: BN;
    className?: string;
    minBalance: BN;
    siFormat: [number, string];
}
declare function Transfer({ accountId, assetId, className, minBalance, siFormat: [siDecimals, siSymbol] }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Transfer>;
export default _default;
