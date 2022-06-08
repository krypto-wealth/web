import type { DeriveReferendumVote } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    vote: DeriveReferendumVote;
    className?: string;
}
declare function ReferendumVote({ vote: { accountId, balance, isDelegating, vote } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ReferendumVote>;
export default _default;
