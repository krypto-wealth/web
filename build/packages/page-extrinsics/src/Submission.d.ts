import type { DecodedExtrinsic } from './types';
import React from 'react';
interface Props {
    className?: string;
    defaultValue: DecodedExtrinsic | null;
}
declare function Selection({ className, defaultValue }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Selection>;
export default _default;
