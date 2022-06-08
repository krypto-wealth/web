import type { CollectionInfo } from '../types';
import React from 'react';
interface Props {
    className?: string;
    value: CollectionInfo;
}
declare function Collection({ className, value: { details, id, ipfsData } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Collection>;
export default _default;
