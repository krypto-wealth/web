import type { StakerState } from '@polkadot/react-hooks/types';
import React from 'react';
interface Props {
    className?: string;
    ownStashes?: StakerState[];
}
declare function Bags({ className, ownStashes }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Bags>;
export default _default;
