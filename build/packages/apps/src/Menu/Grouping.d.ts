import type { Group } from './types';
import React from 'react';
interface Props extends Group {
    className?: string;
    isActive: boolean;
}
declare function Grouping({ className, isActive, name, routes }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Grouping, any, {}, never>>;
export default _default;
