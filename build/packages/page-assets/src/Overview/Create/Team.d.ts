import type { TeamState } from './types';
import React from 'react';
interface Props {
    accountId: string;
    className?: string;
    defaultValue: TeamState | null;
    onChange: (info: TeamState | null) => void;
}
declare function Team({ accountId, className, defaultValue, onChange }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Team>;
export default _default;
