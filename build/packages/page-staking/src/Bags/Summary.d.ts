import type { BagMap } from './types';
import React from 'react';
interface Props {
    bags?: unknown[];
    className?: string;
    mapOwn?: BagMap;
}
declare function Summary({ bags, className, mapOwn }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Summary>;
export default _default;
