/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { PayoutValidator } from './types';
import React from 'react';
interface Props {
    className?: string;
    historyDepth?: BN;
    isDisabled?: boolean;
    payout: PayoutValidator;
}
declare function Validator({ className, historyDepth, isDisabled, payout }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Validator>;
export default _default;
