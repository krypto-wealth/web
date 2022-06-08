/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { AuctionInfo, WinnerData } from '../types';
import React from 'react';
interface Props {
    auctionInfo: AuctionInfo;
    blockNumber?: BN;
    className?: string;
    isFirst: boolean;
    isLatest: boolean;
    value: WinnerData;
}
declare function WinRanges({ auctionInfo, blockNumber, className, isFirst, isLatest, value: { accountId, firstSlot, isCrowdloan, lastSlot, paraId, value } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof WinRanges>;
export default _default;
