/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { LeasePeriod } from '../types';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    leasePeriod?: LeasePeriod | null;
    value?: number | BN | null;
}
declare function LeaseBlocks({ children, className, leasePeriod, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof LeaseBlocks>;
export default _default;
