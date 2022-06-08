/// <reference types="bn.js" />
import type { SiDef } from '@polkadot/util/types';
import type { BitLength } from './types';
import React from 'react';
import { BN } from '@polkadot/util';
interface Props {
    autoFocus?: boolean;
    bitLength?: BitLength;
    children?: React.ReactNode;
    className?: string;
    defaultValue?: string | BN;
    help?: React.ReactNode;
    isDisabled?: boolean;
    isError?: boolean;
    isFull?: boolean;
    isSi?: boolean;
    isDecimal?: boolean;
    isWarning?: boolean;
    isSigned?: boolean;
    isZeroable?: boolean;
    label?: React.ReactNode;
    labelExtra?: React.ReactNode;
    maxLength?: number;
    maxValue?: BN;
    onChange?: (value?: BN) => void;
    onEnter?: () => void;
    onEscape?: () => void;
    placeholder?: string;
    siDecimals?: number;
    siDefault?: SiDef;
    siSymbol?: string;
    value?: BN | null;
    withEllipsis?: boolean;
    withLabel?: boolean;
    withMax?: boolean;
}
export declare class TokenUnit {
    static abbr: string;
    static setAbbr(abbr?: string): void;
}
declare function InputNumber({ autoFocus, bitLength, children, className, defaultValue, help, isDecimal, isFull, isSi, isDisabled, isError, isWarning, isSigned, isZeroable, label, labelExtra, maxLength, maxValue, onChange, onEnter, onEscape, placeholder, siDecimals, siDefault, siSymbol, value: propsValue }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof InputNumber, any, {}, never>>;
export default _default;
