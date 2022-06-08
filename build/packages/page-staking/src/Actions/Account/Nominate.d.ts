/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { SortedTargets } from '../../types';
import React from 'react';
interface Props {
    className?: string;
    controllerId: string;
    nominating?: string[];
    onClose: () => void;
    poolId?: BN;
    stashId: string;
    targets: SortedTargets;
}
declare function Nominate({ className, controllerId, nominating, onClose, poolId, stashId, targets }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Nominate, any, {}, never>>;
export default _default;
