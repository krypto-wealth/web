/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    className?: string;
    controllerId: string;
    maxUnbond: BN;
    onClose: () => void;
    poolId: BN;
}
declare function Unbond({ className, controllerId, maxUnbond, onClose, poolId }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Unbond>;
export default _default;
