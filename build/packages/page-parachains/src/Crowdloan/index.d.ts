import type { AuctionInfo, Campaigns, LeasePeriod, OwnedId } from '../types';
import React from 'react';
interface Props {
    auctionInfo?: AuctionInfo;
    campaigns: Campaigns;
    className?: string;
    leasePeriod?: LeasePeriod;
    ownedIds: OwnedId[];
}
declare function Crowdloan({ auctionInfo, campaigns: { activeCap, activeRaised, funds, totalCap, totalRaised }, className, leasePeriod, ownedIds }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Crowdloan>;
export default _default;
