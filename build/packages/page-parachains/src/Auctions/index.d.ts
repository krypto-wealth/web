import type { AuctionInfo, Campaigns, OwnedId, Winning } from '../types';
import React from 'react';
interface Props {
    auctionInfo?: AuctionInfo;
    campaigns: Campaigns;
    className?: string;
    ownedIds: OwnedId[];
    winningData?: Winning[];
}
declare function Auctions({ auctionInfo, campaigns, className, ownedIds, winningData }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Auctions>;
export default _default;
