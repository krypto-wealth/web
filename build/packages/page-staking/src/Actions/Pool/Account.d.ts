/// <reference types="bn.js" />
import type { DeriveSessionProgress } from '@polkadot/api-derive/types';
import type { PoolInfo } from '../../Pools/types';
import type { SortedTargets } from '../../types';
import React from 'react';
import { BN } from '@polkadot/util';
interface Props {
    accountId: string;
    className?: string;
    info: PoolInfo;
    isFirst: boolean;
    poolId: BN;
    sessionProgress?: DeriveSessionProgress;
    targets: SortedTargets;
}
declare function Pool({ accountId, className, info: { bonded: { points, roles }, metadata, nominating, reward, rewardClaimable, stashId }, isFirst, poolId, sessionProgress, targets }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Pool>;
export default _default;
