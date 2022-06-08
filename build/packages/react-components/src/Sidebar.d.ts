import React from 'react';
interface Props {
    button?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    dataTestId?: string;
    offset?: number | string;
    onClose: () => void;
    position: 'left' | 'right';
    sidebarRef: React.RefObject<HTMLDivElement>;
}
declare function Sidebar({ button, children, className, dataTestId, onClose, sidebarRef }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Sidebar, any, {}, never>>;
export default _default;
