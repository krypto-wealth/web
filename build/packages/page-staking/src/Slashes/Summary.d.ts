import type { SlashEra } from './types';
import React from 'react';
interface Props {
    slash: SlashEra;
}
declare function Summary({ slash: { era, nominators, reporters, total, validators } }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Summary>;
export default _default;
