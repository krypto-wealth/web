/// <reference types="bn.js" />
import type { StakerState } from '@polkadot/react-hooks/types';
import type { OwnPool } from '../types';
import React from 'react';
import { BN } from '@polkadot/util';
interface Props {
    className?: string;
    historyDepth?: BN;
    isInElection?: boolean;
    ownPools?: OwnPool[];
    ownValidators: StakerState[];
}
declare function Payouts({ className, historyDepth, isInElection, ownPools, ownValidators }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Payouts, any, {}, never>>;
export default _default;
