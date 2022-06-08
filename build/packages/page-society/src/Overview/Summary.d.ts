/// <reference types="bn.js" />
import type { DeriveSociety } from '@polkadot/api-derive/types';
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    className?: string;
    info?: DeriveSociety;
    payoutTotal?: BN;
}
declare function Summary({ className, info, payoutTotal }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Summary, any, {}, never>>;
export default _default;
