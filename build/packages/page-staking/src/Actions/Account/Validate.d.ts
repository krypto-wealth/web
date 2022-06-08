/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    controllerId: string;
    minCommission?: BN;
    onClose: () => void;
    stashId: string;
}
declare function Validate({ controllerId, minCommission, onClose, stashId }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Validate>;
export default _default;
