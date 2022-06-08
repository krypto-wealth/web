import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    isEditable?: boolean;
    isEditing?: boolean;
    onChange?: (_: string[]) => void;
    onToggleIsEditing?: () => void;
    onSave?: () => void;
    value: string[];
    withEditButton?: boolean;
    withTitle?: boolean;
}
declare function Tags({ children, className, isEditable, isEditing, onChange, onSave, onToggleIsEditing, value, withEditButton, withTitle }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Tags, any, {}, never>>;
export default _default;
