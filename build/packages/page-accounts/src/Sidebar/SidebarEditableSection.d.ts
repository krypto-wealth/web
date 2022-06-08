import React from 'react';
interface Props {
    accountIndex: string | undefined;
    address: string;
    isBeingEdited: (arg: boolean) => void;
    onUpdateName: () => void;
    sidebarRef: React.RefObject<HTMLDivElement>;
}
declare function SidebarEditableSection({ accountIndex, address, isBeingEdited, onUpdateName, sidebarRef }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof SidebarEditableSection>;
export default _default;
