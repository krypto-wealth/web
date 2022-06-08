import type { AssetInfo } from '../types';
import React from 'react';
interface Props {
    className?: string;
    infos?: AssetInfo[];
}
declare function Balances({ className, infos }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Balances, any, {}, never>>;
export default _default;
