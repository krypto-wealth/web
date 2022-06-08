import type { AuctionInfo, Campaigns, Winning } from '../types';
import React from 'react';
interface Props {
    auctionInfo?: AuctionInfo;
    campaigns: Campaigns;
    className?: string;
    winningData?: Winning[];
}
declare function Auction({ auctionInfo, campaigns, className, winningData }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Auction>;
export default _default;
