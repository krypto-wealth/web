/// <reference types="bn.js" />
import '@polkadot/api-augment';
import type { StakerState } from '@polkadot/react-hooks/types';
import type { OwnPool, SortedTargets } from '../types';
import React from 'react';
import { BN } from '@polkadot/util';
interface Props {
    className?: string;
    isInElection?: boolean;
    minCommission?: BN;
    ownPools?: OwnPool[];
    ownStashes?: StakerState[];
    next?: string[];
    validators?: string[];
    targets: SortedTargets;
}
declare function Actions({ className, isInElection, minCommission, ownPools, ownStashes, targets }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Actions>;
export default _default;
