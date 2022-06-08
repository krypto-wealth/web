/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    assetIds: BN[];
    className?: string;
    onClose: () => void;
    openId: BN;
}
declare function Create({ assetIds, className, onClose, openId }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Create>;
export default _default;
