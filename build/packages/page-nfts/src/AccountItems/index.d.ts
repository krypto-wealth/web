import type { CollectionInfo } from '../types';
import React from 'react';
interface Props {
    className?: string;
    infos?: CollectionInfo[];
}
declare function AccountItems({ className, infos }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof AccountItems, any, {}, never>>;
export default _default;
