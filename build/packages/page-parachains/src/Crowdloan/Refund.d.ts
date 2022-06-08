import type { ParaId } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    paraId: ParaId;
}
declare function Refund({ className, paraId }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Refund>;
export default _default;
