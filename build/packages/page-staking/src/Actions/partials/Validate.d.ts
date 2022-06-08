/// <reference types="bn.js" />
import type { ValidateInfo } from './types';
import React from 'react';
import { BN } from '@polkadot/util';
interface Props {
    className?: string;
    controllerId: string;
    minCommission?: BN;
    onChange: (info: ValidateInfo) => void;
    stashId: string;
    withFocus?: boolean;
    withSenders?: boolean;
}
declare function Validate({ className, controllerId, minCommission, onChange, stashId, withFocus, withSenders }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Validate>;
export default _default;
