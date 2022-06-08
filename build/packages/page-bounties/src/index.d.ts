import React from 'react';
export { default as useCounter } from './useCounter';
interface Props {
    basePath: string;
    className?: string;
}
declare function BountiesApp({ basePath, className }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof BountiesApp>;
export default _default;
