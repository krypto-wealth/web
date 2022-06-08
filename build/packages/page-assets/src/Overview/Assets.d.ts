import type { AssetInfo } from '../types';
import React from 'react';
interface Props {
    className?: string;
    infos?: AssetInfo[];
}
declare function Assets({ className, infos }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Assets>;
export default _default;
