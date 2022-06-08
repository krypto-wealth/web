/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { AssetInfo } from '../types';
import React from 'react';
interface Props {
    className?: string;
    ids?: BN[];
    infos?: AssetInfo[];
    openId: BN;
}
declare function Overview({ className, ids, infos, openId }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Overview>;
export default _default;
