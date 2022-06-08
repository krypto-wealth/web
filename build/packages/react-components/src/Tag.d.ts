import React from 'react';
import { FlagColor as TagColor } from '@polkadot/react-components/types';
interface Props {
    className?: string;
    color?: TagColor;
    hover?: React.ReactNode;
    label: React.ReactNode;
    size?: 'small' | 'tiny';
}
declare function Tag({ className, color, hover, label, size }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Tag, any, {}, never>>;
export default _default;
