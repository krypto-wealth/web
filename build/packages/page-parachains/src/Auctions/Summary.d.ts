import type { AuctionInfo, Winning } from '../types';
import React from 'react';
interface Props {
    auctionInfo?: AuctionInfo;
    className?: string;
    lastWinners?: Winning;
}
declare function Summary({ auctionInfo, className, lastWinners }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Summary>;
export default _default;
