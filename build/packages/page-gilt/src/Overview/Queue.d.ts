import type { QueueTotal } from './types';
import React from 'react';
interface Props {
    className?: string;
    value: QueueTotal;
}
declare function Queue({ className, value: { balance, index, numItems } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Queue>;
export default _default;
