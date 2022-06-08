/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    className?: string;
    isRelay?: boolean;
    minCommission?: BN;
}
declare function Legend({ className, isRelay, minCommission }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Legend, any, {}, never>>;
export default _default;
