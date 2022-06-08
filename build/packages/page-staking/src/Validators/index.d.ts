/// <reference types="bn.js" />
import type { DeriveStakingOverview } from '@polkadot/api-derive/types';
import type { StakerState } from '@polkadot/react-hooks/types';
import type { BN } from '@polkadot/util';
import type { NominatedByMap, SortedTargets } from '../types';
import React from 'react';
interface Props {
    className?: string;
    favorites: string[];
    hasAccounts: boolean;
    hasQueries: boolean;
    minCommission?: BN;
    nominatedBy?: NominatedByMap;
    ownStashes?: StakerState[];
    paraValidators?: Record<string, boolean>;
    stakingOverview?: DeriveStakingOverview;
    targets: SortedTargets;
    toggleFavorite: (address: string) => void;
    toggleLedger?: () => void;
    toggleNominatedBy: () => void;
}
declare function Overview({ className, favorites, hasAccounts, hasQueries, minCommission, nominatedBy, ownStashes, paraValidators, stakingOverview, targets, toggleFavorite, toggleLedger, toggleNominatedBy }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Overview>;
export default _default;
