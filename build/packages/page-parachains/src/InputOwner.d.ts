import type { OwnedId, OwnerInfo } from './types';
import React from 'react';
interface Props {
    noCodeCheck?: boolean;
    onChange: (owner: OwnerInfo) => void;
    ownedIds: OwnedId[];
}
declare function InputOwner({ noCodeCheck, onChange, ownedIds }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof InputOwner>;
export default _default;
