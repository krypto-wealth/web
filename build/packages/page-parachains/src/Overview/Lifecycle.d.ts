import type { PolkadotRuntimeParachainsParasParaLifecycle } from '@polkadot/types/lookup';
import type { QueuedAction } from '../types';
import React from 'react';
interface Props {
    lifecycle: PolkadotRuntimeParachainsParasParaLifecycle | null;
    nextAction?: QueuedAction;
}
declare function Lifecycle({ lifecycle, nextAction }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Lifecycle>;
export default _default;
