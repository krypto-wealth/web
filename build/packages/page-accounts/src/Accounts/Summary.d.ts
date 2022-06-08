import type { AccountBalance } from '../types';
import React from 'react';
interface Props {
    className?: string;
    balance?: AccountBalance;
}
declare function Summary({ balance, className }: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Summary>;
export default _default;
