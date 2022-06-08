import React from 'react';
interface Props {
    className?: string;
    filterOn: string;
    label: string;
    setFilter: (filter: string) => void;
}
declare function Filter({ className, filterOn, label, setFilter }: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Filter, any, {}, never>>;
export default _default;
