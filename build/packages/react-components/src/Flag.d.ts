import React from 'react';
import { FlagColor } from '@polkadot/react-components/types';
interface FlagProps {
    className?: string;
    color: FlagColor;
    label: React.ReactNode;
}
declare function Flag({ className, color, label }: FlagProps): React.ReactElement<FlagProps>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Flag, any, {}, never>>;
export default _default;
