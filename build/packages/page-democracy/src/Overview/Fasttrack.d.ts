import type { Hash, VoteThreshold } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    imageHash: Hash;
    members: string[];
    threshold: VoteThreshold;
}
declare function Fasttrack({ imageHash, members, threshold }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Fasttrack>;
export default _default;
