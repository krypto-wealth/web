/// <reference types="bn.js" />
import type { Compact } from '@polkadot/types';
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    format?: [number, string];
    formatIndex?: number;
    isShort?: boolean;
    label?: React.ReactNode;
    labelPost?: LabelPost;
    value?: Compact<any> | BN | string | null | 'all';
    valueFormatted?: string;
    withCurrency?: boolean;
    withSi?: boolean;
}
declare type LabelPost = string | React.ReactNode;
declare function FormatBalance({ children, className, format, formatIndex, isShort, label, labelPost, value, valueFormatted, withCurrency, withSi }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof FormatBalance, any, {}, never>>;
export default _default;
