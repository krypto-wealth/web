/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { BondInfo } from './types';
import React from 'react';
interface Props {
    className?: string;
    isNominating?: boolean;
    minNominated?: BN;
    minNominatorBond?: BN;
    minValidatorBond?: BN;
    onChange: (info: BondInfo) => void;
}
declare function Bond({ className, isNominating, minNominated, minNominatorBond, minValidatorBond, onChange }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Bond>;
export default _default;
