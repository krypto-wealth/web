import type { BlockNumber } from '@polkadot/types/interfaces';
import type { ScheduledExt } from './types';
import React from 'react';
interface Props {
    bestNumber?: BlockNumber;
    className?: string;
    value: ScheduledExt;
}
declare function Scheduled({ bestNumber, className, value: { blockNumber, call, maybeId, maybePeriodic } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Scheduled>;
export default _default;
