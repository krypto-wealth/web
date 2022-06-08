import type { PalletSocietyBid } from '@polkadot/types/lookup';
import React from 'react';
interface Props {
    index: number;
    value: PalletSocietyBid;
}
declare function BidRow({ index, value: { kind, value, who } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof BidRow>;
export default _default;
