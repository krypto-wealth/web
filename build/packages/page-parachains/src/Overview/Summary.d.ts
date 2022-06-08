import type { LeasePeriod } from '../types';
import React from 'react';
interface Props {
    leasePeriod?: LeasePeriod;
    parachainCount?: number;
    proposalCount?: number;
    upcomingCount?: number;
}
declare function Summary({ leasePeriod, parachainCount, proposalCount, upcomingCount }: Props): React.ReactElement<Props>;
export default Summary;
