/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { ListNode } from './types';
import React from 'react';
interface Props {
    bagLower: BN;
    bagUpper: BN;
    className?: string;
    isLoading: boolean;
    list?: ListNode[];
    stashId: string;
}
declare function Stash({ bagLower, bagUpper, className, isLoading, list, stashId }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Stash, any, {}, never>>;
export default _default;
