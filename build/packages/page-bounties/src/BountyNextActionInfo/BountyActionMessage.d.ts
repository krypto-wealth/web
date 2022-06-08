/// <reference types="bn.js" />
import type { BlockNumber, BountyStatus } from '@polkadot/types/interfaces';
import React from 'react';
import { BN } from '@polkadot/util';
interface Props {
    bestNumber: BlockNumber;
    blocksUntilUpdate?: BN;
    status: BountyStatus;
}
export declare const BLOCKS_PERCENTAGE_LEFT_TO_SHOW_WARNING = 10;
declare function BountyActionMessage({ bestNumber, blocksUntilUpdate, status }: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof BountyActionMessage>;
export default _default;
