import type { KeyedEvent } from '@polkadot/react-query/types';
import type { SignedBlock, Weight } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    events?: KeyedEvent[];
    maxBlockWeight?: Weight;
    signedBlock?: SignedBlock;
}
declare function Summary({ events, maxBlockWeight, signedBlock }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Summary>;
export default _default;
