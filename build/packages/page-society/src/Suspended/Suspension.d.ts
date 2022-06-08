import type { AccountId, BalanceOf } from '@polkadot/types/interfaces';
import type { PalletSocietyBidKind } from '@polkadot/types/lookup';
import React from 'react';
interface Props {
    balance?: BalanceOf;
    bid?: PalletSocietyBidKind;
    value: AccountId;
}
declare function Suspension({ balance, bid, value }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Suspension>;
export default _default;
