import type { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import type { AccountId, BountyStatus } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    beneficiary?: AccountId;
    proposals?: DeriveCollectiveProposal[];
    status: BountyStatus;
}
declare function BountyInfos({ beneficiary, proposals, status }: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof BountyInfos>;
export default _default;
