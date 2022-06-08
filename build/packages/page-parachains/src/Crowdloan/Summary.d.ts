/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    activeCap: BN;
    activeRaised: BN;
    className?: string;
    fundCount: number;
    totalCap: BN;
    totalRaised: BN;
}
declare function Summary({ activeCap, activeRaised, className, fundCount, totalCap, totalRaised }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Summary>;
export default _default;
