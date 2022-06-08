/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { PayoutStash } from './types';
import React from 'react';
interface Props {
    className?: string;
    historyDepth?: BN;
    payout: PayoutStash;
}
declare function Stash({ className, historyDepth, payout: { available, rewards, stashId } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Stash>;
export default _default;
