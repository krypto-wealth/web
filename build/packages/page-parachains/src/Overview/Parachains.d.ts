import type { ParaId } from '@polkadot/types/interfaces';
import type { LeasePeriod, QueuedAction, ScheduledProposals } from '../types';
import React from 'react';
interface Props {
    actionsQueue: QueuedAction[];
    ids?: ParaId[];
    leasePeriod?: LeasePeriod;
    scheduled?: ScheduledProposals[];
}
declare function Parachains({ actionsQueue, ids, leasePeriod, scheduled }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Parachains>;
export default _default;
