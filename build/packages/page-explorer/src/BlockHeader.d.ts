import type { HeaderExtended } from '@polkadot/api-derive/types';
import React from 'react';
export interface HeaderExtendedWithMapping extends HeaderExtended {
    authorFromMapping?: string;
}
interface Props {
    value: HeaderExtendedWithMapping;
}
declare function BlockHeader({ value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof BlockHeader>;
export default _default;
