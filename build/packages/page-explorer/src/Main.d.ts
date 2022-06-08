import type { HeaderExtended } from '@polkadot/api-derive/types';
import type { KeyedEvent } from '@polkadot/react-query/types';
import React from 'react';
interface Props {
    eventCount: number;
    events: KeyedEvent[];
    headers: HeaderExtended[];
}
declare function Main({ eventCount, events, headers }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Main>;
export default _default;
