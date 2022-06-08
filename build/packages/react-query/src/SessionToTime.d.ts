/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    isInline?: boolean;
    label?: React.ReactNode;
    value?: BN;
}
declare function SessionToTime({ children, className, isInline, label, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof SessionToTime>;
export default _default;
