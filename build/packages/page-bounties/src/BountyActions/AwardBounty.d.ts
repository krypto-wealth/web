import type { AccountId, BountyIndex } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    curatorId: AccountId;
    description: string;
    index: BountyIndex;
}
declare function AwardBounty({ curatorId, description, index }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof AwardBounty>;
export default _default;
