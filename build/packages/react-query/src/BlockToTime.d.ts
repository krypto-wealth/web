/// <reference types="bn.js" />
import type { ApiPromise } from '@polkadot/api';
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    api?: ApiPromise;
    children?: React.ReactNode;
    className?: string;
    isInline?: boolean;
    label?: React.ReactNode;
    value?: BN;
}
declare function BlockToTime({ api, children, className, isInline, label, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof BlockToTime, any, {}, never>>;
export default _default;
