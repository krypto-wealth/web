/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    callOnResult?: (accountNonce: BN) => void;
    children?: React.ReactNode;
    className?: string;
    label?: React.ReactNode;
    params?: string | null;
}
declare function Nonce({ children, className, label, params }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Nonce>;
export default _default;
