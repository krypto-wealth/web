import type { DeriveSessionProgress } from '@polkadot/api-derive/types';
import type { u32 } from '@polkadot/types';
import type { PalletNominationPoolsPoolMember } from '@polkadot/types/lookup';
import type { SortedTargets } from '../../types';
import React from 'react';
interface Props {
    count: number;
    className?: string;
    members: Record<string, PalletNominationPoolsPoolMember>;
    poolId: u32;
    sessionProgress?: DeriveSessionProgress;
    targets: SortedTargets;
}
declare function Pool({ className, count, members, poolId, sessionProgress, targets }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Pool>;
export default _default;
