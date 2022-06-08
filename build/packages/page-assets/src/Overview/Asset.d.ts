import type { AssetInfo } from '../types';
import React from 'react';
interface Props {
    className?: string;
    value: AssetInfo;
}
declare function Asset({ className, value: { details, id, isIssuerMe, metadata } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Asset>;
export default _default;
