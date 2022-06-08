import React from 'react';
interface AccountName {
    name: string;
    isNameValid: boolean;
}
interface AccountPassword {
    password: string;
    isPasswordValid: boolean;
}
interface Props {
    name: AccountName;
    onCommit: () => void;
    setName: (value: AccountName) => void;
    setPassword: (value: AccountPassword) => void;
}
declare const _default: React.MemoExoticComponent<({ name: { isNameValid, name }, onCommit, setName, setPassword }: Props) => JSX.Element>;
export default _default;
