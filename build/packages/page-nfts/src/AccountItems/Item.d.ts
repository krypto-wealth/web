import type { ItemInfo } from './types';
import React from 'react';
interface Props {
    className?: string;
    collectionName: string;
    value: ItemInfo;
}
declare function Item({ className, collectionName, value: { account, id, ipfsData } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Item>;
export default _default;
