import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    content?: React.ReactNode;
    withIcon?: boolean;
}
declare function MarkWarning({ children, className, content, withIcon }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof MarkWarning, any, {}, never>>;
export default _default;
