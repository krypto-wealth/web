/// <reference types="bn.js" />
import type { UInt } from '@polkadot/types';
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    className?: string;
    isDisabled?: boolean;
    total?: UInt | BN | number | null;
    value?: UInt | BN | number | null;
}
declare function Progress({ className, isDisabled, total, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Progress, any, {}, never>>;
export default _default;
