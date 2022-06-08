/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { AuctionInfo, LeasePeriod, OwnedId } from '../types';
import React from 'react';
interface Props {
    auctionInfo?: AuctionInfo;
    bestNumber?: BN;
    className?: string;
    leasePeriod?: LeasePeriod;
    ownedIds: OwnedId[];
}
declare function FundAdd({ auctionInfo, bestNumber, className, leasePeriod, ownedIds }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof FundAdd>;
export default _default;
