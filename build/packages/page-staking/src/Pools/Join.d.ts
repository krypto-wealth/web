/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { Params } from './types';
import React from 'react';
interface Props {
    className?: string;
    isDisabled?: boolean;
    ownAccounts?: string[];
    params: Params;
    poolId: BN;
}
declare function Join({ className, isDisabled, ownAccounts, params: { minMemberBond }, poolId }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Join>;
export default _default;
