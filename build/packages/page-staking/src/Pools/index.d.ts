import type { OwnPool } from '../types';
import React from 'react';
interface Props {
    className?: string;
    ownPools?: OwnPool[];
}
declare function NominationPools({ className, ownPools }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof NominationPools>;
export default _default;
