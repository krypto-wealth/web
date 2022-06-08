import React from 'react';
import useCounter from './useCounter';
export { useCounter };
interface Props {
    basePath: string;
    className?: string;
}
declare function CouncilApp({ basePath, className }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof CouncilApp>;
export default _default;
