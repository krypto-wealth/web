/// <reference types="bn.js" />
import type { OwnedId } from '../types';
import React from 'react';
import { BN } from '@polkadot/util';
interface Props {
    className?: string;
    nextParaId?: BN;
    onClose: () => void;
    ownedIds: OwnedId[];
}
declare function RegisterThread({ className, nextParaId, onClose, ownedIds }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof RegisterThread>;
export default _default;
