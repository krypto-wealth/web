import type { ParaId } from '@polkadot/types/interfaces';
import type { LeaseInfo, LeasePeriod, QueuedAction } from '../types';
import React from 'react';
interface Props {
    id: ParaId;
    leasePeriod: LeasePeriod;
    leases: LeaseInfo[];
    nextAction?: QueuedAction;
}
declare function Parathread({ id, leasePeriod, leases, nextAction }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Parathread>;
export default _default;
