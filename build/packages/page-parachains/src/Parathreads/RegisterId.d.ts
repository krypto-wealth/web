/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    className?: string;
    nextParaId?: BN;
    onClose: () => void;
}
declare function RegisterId({ className, nextParaId, onClose }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof RegisterId>;
export default _default;
