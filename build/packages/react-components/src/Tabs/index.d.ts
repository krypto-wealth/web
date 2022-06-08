import type { SectionType, TabItem } from './types';
import React from 'react';
export declare const TabsContext: React.Context<SectionType>;
interface Props {
    className?: string;
    basePath: string;
    hidden?: string[] | null | false;
    items: TabItem[];
}
declare function Tabs({ basePath, className, hidden, items }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Tabs, any, {}, never>>;
export default _default;
