import type { QueueTotal } from './types';
import React from 'react';
interface Props {
    className?: string;
    queueTotals?: QueueTotal[];
}
declare function Queues({ className, queueTotals }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Queues>;
export default _default;
