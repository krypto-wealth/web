/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { Campaign, LeasePeriod } from '../types';
import React from 'react';
interface Props {
    bestNumber?: BN;
    className?: string;
    leasePeriod?: LeasePeriod;
    value: Campaign[] | null;
}
declare function Funds({ bestNumber, className, leasePeriod, value }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Funds>;
export default _default;
