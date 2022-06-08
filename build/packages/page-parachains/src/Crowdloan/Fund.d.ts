/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { Campaign, LeasePeriod } from '../types';
import React from 'react';
interface Props {
    bestHash?: string;
    bestNumber?: BN;
    className?: string;
    isOngoing?: boolean;
    leasePeriod?: LeasePeriod;
    value: Campaign;
}
declare function Fund({ bestHash, bestNumber, className, isOngoing, leasePeriod, value: { info: { cap, depositor, end, firstPeriod, lastPeriod, raised, verifier }, isCapped, isEnded, isWinner, paraId } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Fund>;
export default _default;
