import React from 'react';
interface Props {
    autoFocus?: boolean;
    children?: React.ReactNode;
    className?: string;
    defaultValue?: string | null;
    help?: React.ReactNode;
    isDisabled?: boolean;
    isError?: boolean;
    isFull?: boolean;
    label?: React.ReactNode;
    noConvert?: boolean;
    onChange?: (address: string | null) => void;
    onEnter?: () => void;
    onEscape?: () => void;
}
declare function InputAddressSimple({ autoFocus, children, className, defaultValue, help, isDisabled, isError, isFull, label, noConvert, onChange, onEnter, onEscape }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof InputAddressSimple, any, {}, never>>;
export default _default;
