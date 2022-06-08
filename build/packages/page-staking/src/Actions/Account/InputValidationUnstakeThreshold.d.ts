/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    unstakeThreshold: BN | undefined;
    onError: (error: string | null) => void;
}
declare function InputValidationUnstakeThreshold({ onError, unstakeThreshold }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof InputValidationUnstakeThreshold>;
export default _default;