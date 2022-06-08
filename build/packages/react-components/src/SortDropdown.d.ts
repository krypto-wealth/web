import React from 'react';
interface Props {
    className?: string;
    defaultValue: string;
    label: string;
    onChange: (value: unknown) => void;
    onClick: () => void;
    options: unknown[];
    sortDirection: 'descending' | 'ascending';
}
declare function SortDropdown({ className, defaultValue, label, onChange, onClick, options, sortDirection }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof SortDropdown, any, {}, never>>;
export default _default;
