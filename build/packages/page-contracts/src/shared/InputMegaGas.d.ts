/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { UseWeight } from '../types';
import React from 'react';
interface Props {
    className?: string;
    estimatedWeight?: BN;
    help: React.ReactNode;
    isCall?: boolean;
    weight: UseWeight;
}
declare function InputMegaGas({ className, estimatedWeight, help, isCall, weight: { executionTime, isValid, megaGas, percentage, setIsEmpty, setMegaGas } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof InputMegaGas, any, {}, never>>;
export default _default;
