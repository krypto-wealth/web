import type { AuctionInfo, OwnedId, Winning } from '../types';
import React from 'react';
interface Props {
    auctionInfo?: AuctionInfo;
    className?: string;
    lastWinners?: Winning;
    ownedIds: OwnedId[];
}
declare function Bid({ auctionInfo, className, lastWinners, ownedIds }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Bid>;
export default _default;
