import type { DeriveStakingOverview } from '@polkadot/api-derive/types';
import type { StakerState } from '@polkadot/react-hooks/types';
import type { NominatedByMap, SortedTargets } from '../types';
import React from 'react';
interface Props {
    className?: string;
    isInElection: boolean;
    nominatedBy?: NominatedByMap;
    ownStashes?: StakerState[];
    stakingOverview?: DeriveStakingOverview;
    targets: SortedTargets;
    toggleFavorite: (address: string) => void;
    toggleLedger: () => void;
    toggleNominatedBy: () => void;
}
declare function Targets({ className, isInElection, nominatedBy, ownStashes, targets: { avgStaked, inflation: { stakedReturn }, lastEra, lowStaked, medianComm, minNominated, minNominatorBond, nominators, totalIssuance, totalStaked, validatorIds, validators }, toggleFavorite, toggleLedger, toggleNominatedBy }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Targets, any, {}, never>>;
export default _default;
