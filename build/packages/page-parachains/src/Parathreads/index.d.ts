import type { ParaId } from '@polkadot/types/interfaces';
import type { LeasePeriod, OwnedId, QueuedAction } from '../types';
import React from 'react';
interface Props {
    actionsQueue: QueuedAction[];
    className?: string;
    ids?: ParaId[];
    leasePeriod?: LeasePeriod;
    ownedIds: OwnedId[];
}
declare function Parathreads({ actionsQueue, className, ids, leasePeriod, ownedIds }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Parathreads>;
export default _default;
