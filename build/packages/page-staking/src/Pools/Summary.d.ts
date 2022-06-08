import type { Params } from './types';
import React from 'react';
interface Props {
    className?: string;
    params: Params;
    poolCount?: number;
}
declare function Summary({ className, params: { maxMembers, maxMembersPerPool, maxPools }, poolCount }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Summary>;
export default _default;
