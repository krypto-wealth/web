/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { MapMember } from '../types';
import React from 'react';
interface Props {
    bestNumber?: BN;
    className?: string;
    value: MapMember;
}
declare function Member({ bestNumber, className, value: { accountId, isCandidateVoter, isDefenderVoter, isFounder, isHead, isSkeptic, isSuspended, isWarned, key, payouts, strikes } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Member, any, {}, never>>;
export default _default;
