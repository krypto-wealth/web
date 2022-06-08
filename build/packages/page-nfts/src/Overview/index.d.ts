/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { CollectionInfo } from '../types';
import React from 'react';
interface Props {
    className?: string;
    ids?: BN[];
    infos?: CollectionInfo[];
}
declare function Overview({ className, ids, infos }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Overview>;
export default _default;
