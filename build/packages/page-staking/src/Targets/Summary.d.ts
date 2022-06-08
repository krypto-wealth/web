/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    avgStaked?: BN;
    lastEra?: BN;
    lowStaked?: BN;
    minNominated?: BN;
    minNominatorBond?: BN;
    numNominators?: number;
    numValidators?: number;
    stakedReturn: number;
    totalIssuance?: BN;
    totalStaked?: BN;
}
declare function Summary({ avgStaked, lastEra, lowStaked, minNominated, minNominatorBond, stakedReturn, totalIssuance, totalStaked }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Summary>;
export default _default;
