import type { Balance, ParaId } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    cap: Balance;
    className?: string;
    needsSignature: boolean;
    paraId: ParaId;
    raised: Balance;
}
declare function Contribute({ cap, className, needsSignature, paraId, raised }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Contribute>;
export default _default;
