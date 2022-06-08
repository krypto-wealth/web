import type { Props as ExpanderProps } from './Expander';
import React from 'react';
interface Props extends ExpanderProps {
    empty?: string;
    renderChildren?: () => React.ReactNode[];
}
declare function ExpanderScroll({ children, className, empty, help, helpIcon, renderChildren, summary }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof ExpanderScroll, any, {}, never>>;
export default _default;
