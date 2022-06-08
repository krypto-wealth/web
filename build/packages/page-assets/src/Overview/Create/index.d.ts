/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    assetIds?: BN[];
    className?: string;
    openId: BN;
}
declare function CreateButton({ assetIds, className, openId }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof CreateButton>;
export default _default;
