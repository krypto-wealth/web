import type { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import type { BountyIndex } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    description: string;
    index: BountyIndex;
    proposals?: DeriveCollectiveProposal[];
}
declare function BountyInitiateVoting({ description, index, proposals }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof BountyInitiateVoting>;
export default _default;
