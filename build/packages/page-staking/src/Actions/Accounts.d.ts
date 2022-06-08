/// <reference types="bn.js" />
import type { StakerState } from '@polkadot/react-hooks/types';
import type { PalletStakingUnappliedSlash } from '@polkadot/types/lookup';
import type { SortedTargets } from '../types';
import React from 'react';
import { BN } from '@polkadot/util';
interface Props {
    allSlashes: [BN, PalletStakingUnappliedSlash[]][];
    className?: string;
    footer: React.ReactNode;
    isInElection?: boolean;
    list?: StakerState[];
    minCommission?: BN;
    targets: SortedTargets;
}
declare function Accounts({ allSlashes, className, footer, isInElection, list, minCommission, targets }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Accounts>;
export default _default;
