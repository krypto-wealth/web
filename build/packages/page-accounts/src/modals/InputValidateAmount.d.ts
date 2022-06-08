/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { AmountValidateState } from '../Accounts/types';
import React from 'react';
interface Props {
    amount?: BN | null;
    delegatingAccount: string | null;
    onError: (state: AmountValidateState | null) => void;
}
declare function ValidateAmount({ amount, delegatingAccount, onError }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof ValidateAmount>;
export default _default;
