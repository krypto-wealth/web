/// <reference types="bn.js" />
import type { PalletStakingUnappliedSlash } from '@polkadot/types/lookup';
import type { OwnPool, SortedTargets } from '../types';
import React from 'react';
import { BN } from '@polkadot/util';
interface Props {
    allSlashes: [BN, PalletStakingUnappliedSlash[]][];
    className?: string;
    isInElection?: boolean;
    list?: OwnPool[];
    minCommission?: BN;
    targets: SortedTargets;
}
declare function Pools({ className, list, targets }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Pools>;
export default _default;
