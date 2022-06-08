/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    className?: string;
    controllerId: string;
    onClose: () => void;
    poolId: BN;
}
declare function BondExtra({ className, controllerId, onClose, poolId }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof BondExtra>;
export default _default;
