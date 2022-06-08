import type { DeriveSocietyCandidate } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    allMembers: string[];
    candidates?: DeriveSocietyCandidate[];
    className?: string;
    isMember: boolean;
    ownMembers: string[];
}
declare function Candidates({ allMembers, candidates, className, isMember, ownMembers }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Candidates>;
export default _default;
