/// <reference types="bn.js" />
import type { PalletBagsListListBag } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
import type { StashNode } from './types';
import React from 'react';
interface Props {
    bagLower: BN;
    bagUpper: BN;
    index: number;
    info: PalletBagsListListBag;
    nodesOwn?: StashNode[];
}
declare function Bag({ bagLower, bagUpper, info, nodesOwn }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Bag>;
export default _default;
