import React from 'react';
interface Option {
    isDisabled?: boolean;
    text: string;
    value: number;
}
interface Props {
    className?: string;
    onChange: (index: number) => void;
    options: (Option | null | false)[];
    value: number;
}
declare function ToggleGroup({ className, onChange, options, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof ToggleGroup, any, {}, never>>;
export default _default;
