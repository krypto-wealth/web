import type { Inspect } from '@polkadot/types/types';
import React from 'react';
interface Props {
    className?: string;
    hex?: string | null;
    inspect?: Inspect | null;
    label: React.ReactNode;
}
declare function DecodedInspect({ className, hex, inspect, label }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof DecodedInspect, any, {}, never>>;
export default _default;
