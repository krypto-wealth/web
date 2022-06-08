import type { DeriveStakingOverview } from '@polkadot/api-derive/types';
import type { SortedTargets } from '../types';
import React from 'react';
interface Props {
    className?: string;
    nominators?: string[];
    stakingOverview?: DeriveStakingOverview;
    targets: SortedTargets;
}
declare function Summary({ className, stakingOverview, targets: { counterForNominators, inflation: { idealStake, inflation, stakedFraction }, nominators, waitingIds } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Summary, any, {}, never>>;
export default _default;
