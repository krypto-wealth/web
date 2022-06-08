/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    className?: string;
    controllerId?: string | null;
    poolId?: BN;
}
declare function PoolInfo({ className, controllerId, poolId }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof PoolInfo>;
export default _default;
