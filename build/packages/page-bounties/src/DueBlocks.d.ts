/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    dueBlocks: BN;
    endBlock: BN;
    label: string;
}
declare function DueBlocks({ dueBlocks, endBlock, label }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof DueBlocks>;
export default _default;
