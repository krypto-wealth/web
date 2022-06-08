import type { IconName } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
interface Props {
    className?: string;
    color?: 'blue' | 'gray' | 'green' | 'highlight' | 'normal' | 'orange' | 'purple' | 'red' | 'transparent' | 'white';
    hover?: React.ReactNode;
    hoverAction?: React.ReactNode;
    icon?: IconName;
    info?: React.ReactNode;
    isSmall?: boolean;
    onClick?: () => void;
}
declare function Badge({ className, color, hover, hoverAction, icon, info, isSmall, onClick }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Badge, any, {}, never>>;
export default _default;
