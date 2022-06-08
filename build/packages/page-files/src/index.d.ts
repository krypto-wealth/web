import type { KeyedEvent } from '@polkadot/react-query/types';
import React from 'react';
interface Props {
    basePath: string;
    className?: string;
    newEvents?: KeyedEvent[];
}
declare function FilesApp({ basePath, className }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof FilesApp>;
export default _default;
