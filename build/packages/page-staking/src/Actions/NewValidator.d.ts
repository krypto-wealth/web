/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { SortedTargets } from '../types';
import React from 'react';
interface Props {
    isInElection?: boolean;
    minCommission?: BN;
    targets: SortedTargets;
}
declare function NewValidator({ isInElection, minCommission, targets }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof NewValidator>;
export default _default;
