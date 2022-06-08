import type { ParaId } from '@polkadot/types/interfaces';
import type { LeasePeriod, Proposals, QueuedAction } from '../types';
import React from 'react';
interface Props {
    actionsQueue: QueuedAction[];
    className?: string;
    leasePeriod?: LeasePeriod;
    paraIds?: ParaId[];
    proposals?: Proposals;
    threadIds?: ParaId[];
    upcomingIds?: ParaId[];
}
declare function Overview({ actionsQueue, className, leasePeriod, paraIds, proposals, threadIds }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Overview>;
export default _default;
