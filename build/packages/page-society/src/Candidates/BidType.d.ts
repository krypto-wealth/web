import type { PalletSocietyBidKind } from '@polkadot/types/lookup';
import React from 'react';
interface Props {
    value?: PalletSocietyBidKind;
}
declare function BidType({ value }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof BidType>;
export default _default;
