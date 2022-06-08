/// <reference types="bn.js" />
import type { DeriveHeartbeats, DeriveStakingOverview } from '@polkadot/api-derive/types';
import type { BN } from '@polkadot/util';
import type { NominatedByMap, SortedTargets } from '../types';
import React from 'react';
interface Props {
    className?: string;
    favorites: string[];
    hasQueries: boolean;
    isIntentions?: boolean;
    isIntentionsTrigger?: boolean;
    isOwn: boolean;
    minCommission?: BN;
    nominatedBy?: NominatedByMap;
    ownStashIds?: string[];
    paraValidators?: Record<string, boolean>;
    recentlyOnline?: DeriveHeartbeats;
    setNominators?: (nominators: string[]) => void;
    stakingOverview?: DeriveStakingOverview;
    targets: SortedTargets;
    toggleFavorite: (address: string) => void;
}
declare function CurrentList({ className, favorites, hasQueries, isIntentions, isOwn, minCommission, nominatedBy, ownStashIds, paraValidators, recentlyOnline, stakingOverview, targets, toggleFavorite }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof CurrentList>;
export default _default;
