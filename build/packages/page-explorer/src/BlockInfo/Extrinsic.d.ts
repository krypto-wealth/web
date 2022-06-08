import type { KeyedEvent } from '@polkadot/react-query/types';
import type { BlockNumber, Extrinsic, Weight } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    blockNumber?: BlockNumber;
    className?: string;
    events?: KeyedEvent[];
    index: number;
    maxBlockWeight?: Weight;
    value: Extrinsic;
}
declare function ExtrinsicDisplay({ blockNumber, className, events, index, maxBlockWeight, value }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof ExtrinsicDisplay, any, {}, never>>;
export default _default;
