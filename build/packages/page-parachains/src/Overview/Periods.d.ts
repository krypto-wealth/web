import type { LeasePeriod } from '../types';
import React from 'react';
interface Props {
    className?: string;
    fromFirst?: boolean;
    leasePeriod?: LeasePeriod;
    periods: number[];
}
declare function Periods({ className, fromFirst, leasePeriod, periods }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Periods>;
export default _default;
