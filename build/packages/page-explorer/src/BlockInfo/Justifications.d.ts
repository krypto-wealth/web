import type { Option } from '@polkadot/types';
import type { Justifications } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    value: Option<Justifications>;
}
declare function JustificationList({ value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof JustificationList>;
export default _default;
