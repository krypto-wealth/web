import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    empty?: React.ReactNode | false;
    emptySpinner?: React.ReactNode;
    noBodyTag?: boolean;
}
declare function Body({ children, className, empty, emptySpinner, noBodyTag }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Body>;
export default _default;
