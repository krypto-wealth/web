import React from 'react';
import { AddressFlags } from '@polkadot/react-hooks/types';
interface Props {
    className?: string;
    flags: AddressFlags;
    isEditingName: boolean;
    isEditing: boolean;
    toggleIsEditingName: () => void;
    toggleIsEditingTags: () => void;
    onCancel: () => void;
    onSaveName: () => void;
    onSaveTags: () => void;
    onForgetAddress: () => void;
    onUpdateName: () => void;
    recipientId: string;
}
declare function AccountMenuButtons({ className, flags, isEditing, isEditingName, onCancel, onForgetAddress, onSaveName, onSaveTags, onUpdateName, recipientId, toggleIsEditingName, toggleIsEditingTags }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof AccountMenuButtons, any, {}, never>>;
export default _default;
