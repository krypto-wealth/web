/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { MembersMapEntry, Params } from './types';
import React from 'react';
interface Props {
    className?: string;
    members: MembersMapEntry[];
    ownAccounts?: string[];
    params: Params;
    poolId: BN;
}
declare function Pool({ className, members, ownAccounts, params, poolId }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Pool, any, {}, never>>;
export default _default;
