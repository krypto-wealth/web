/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { InfoState } from './types';
import React from 'react';
interface Props {
    assetIds: BN[];
    className?: string;
    defaultValue: InfoState | null;
    onChange: (info: InfoState | null) => void;
    openId: BN;
}
declare function Info({ assetIds, className, defaultValue, onChange, openId }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Info>;
export default _default;
