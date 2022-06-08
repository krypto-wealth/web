import type { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import type { BountyStatus } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    proposal: DeriveCollectiveProposal;
    status: BountyStatus;
}
declare function VotingDescriptionInfo({ className, proposal, status }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof VotingDescriptionInfo, any, {}, never>>;
export default _default;