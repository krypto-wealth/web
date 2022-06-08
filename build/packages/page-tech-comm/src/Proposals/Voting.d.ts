/// <reference types="bn.js" />
import type { AccountId, Hash } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    hash: Hash | string;
    isMember: boolean;
    members: string[];
    prime?: AccountId | null;
    proposalId: BN | number;
    type: 'membership' | 'technicalCommittee';
}
declare function Voting({ hash, isMember, members, prime, proposalId, type }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Voting>;
export default _default;
