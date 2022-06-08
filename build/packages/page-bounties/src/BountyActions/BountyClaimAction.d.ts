/// <reference types="bn.js" />
import type { AccountId, BountyIndex } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    beneficiaryId: AccountId;
    index: BountyIndex;
    payoutDue: BN;
}
declare function BountyClaimAction({ beneficiaryId, index, payoutDue }: Props): JSX.Element | null;
declare const _default: React.MemoExoticComponent<typeof BountyClaimAction>;
export default _default;
