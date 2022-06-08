/// <reference types="bn.js" />
import type { AmountValidateState } from '../types';
import React from 'react';
import { BN } from '@polkadot/util';
interface Props {
    controllerId: string | null;
    currentAmount?: BN | null;
    isNominating?: boolean;
    minNominated?: BN;
    minNominatorBond?: BN;
    minValidatorBond?: BN;
    onError: (state: AmountValidateState | null) => void;
    stashId: string | null;
    value?: BN | null;
}
declare function ValidateAmount({ currentAmount, isNominating, minNominated, minNominatorBond, minValidatorBond, onError, stashId, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof ValidateAmount>;
export default _default;
