import React from 'react';
interface Props {
    onClick: () => void;
    expanded: boolean;
    className?: string;
}
declare function ExpandButton({ className, expanded, onClick }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof ExpandButton, any, {}, never>>;
export default _default;
