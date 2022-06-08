import type { BountyApi } from './hooks/useBounties';
import React from 'react';
interface Props {
    className?: string;
    info: BountyApi;
}
declare function Summary({ className, info: { bestNumber, bounties, bountyCount, childCount } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Summary>;
export default _default;
