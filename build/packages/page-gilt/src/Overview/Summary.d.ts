import type { ActiveGiltsTotal } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    activeTotal?: ActiveGiltsTotal;
    className?: string;
    isDisabled: boolean;
}
declare function Summary({ activeTotal, className, isDisabled }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Summary>;
export default _default;
