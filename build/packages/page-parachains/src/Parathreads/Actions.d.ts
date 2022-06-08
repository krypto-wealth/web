import type { OwnedId } from '../types';
import React from 'react';
interface Props {
    className?: string;
    ownedIds: OwnedId[];
}
declare function Actions({ className, ownedIds }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Actions>;
export default _default;
