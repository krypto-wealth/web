import React from 'react';
interface Props {
    address: string;
    className?: string;
    dataTestId?: string;
    onClose: () => void;
    onUpdateName: () => void;
}
declare function FullSidebar({ address, className, dataTestId, onClose, onUpdateName }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof FullSidebar, any, {}, never>>;
export default _default;
