/// <reference types="bn.js" />
import type { AccountId, BountyIndex } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    curatorId: AccountId;
    description: string;
    fee: BN;
    index: BountyIndex;
}
declare function BountyAcceptCurator({ curatorId, description, fee, index }: Props): JSX.Element | null;
declare const _default: React.MemoExoticComponent<typeof BountyAcceptCurator>;
export default _default;
