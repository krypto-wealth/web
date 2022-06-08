import type { BountyIndex } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    description: string;
    index: BountyIndex;
    toggleOpen: () => void;
}
declare function CloseBounty({ description, index, toggleOpen }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof CloseBounty>;
export default _default;