import type { CollectionInfo } from '../types';
import React from 'react';
interface Props {
    className?: string;
    infos?: CollectionInfo[];
}
declare function Collections({ className, infos }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Collections>;
export default _default;
