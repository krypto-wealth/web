/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    value?: BN | Date | number;
}
declare function Elapsed({ children, className, value }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Elapsed, any, {}, never>>;
export default _default;
