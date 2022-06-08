/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { OwnPool } from '../types';
import type { Params } from './types';
import React from 'react';
interface Props {
    className?: string;
    ids?: BN[];
    ownPools?: OwnPool[];
    params: Params;
}
declare function Pools({ className, ids, ownPools, params }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Pools>;
export default _default;
