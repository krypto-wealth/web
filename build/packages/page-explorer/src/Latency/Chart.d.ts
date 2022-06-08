import type { ChartContents } from './types';
import React from 'react';
interface Props {
    className?: string;
    colors: string[];
    legends: string[];
    title: string;
    value: ChartContents;
}
declare function ChartDisplay({ className, colors, legends, title, value: { labels, values } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof ChartDisplay, any, {}, never>>;
export default _default;
