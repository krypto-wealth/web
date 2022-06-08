import React from 'react';
import { AccountIdIsh } from './types';
interface Props {
    accountId: AccountIdIsh;
    className?: string;
    label?: string;
}
declare function CryptoType({ accountId, className, label }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof CryptoType>;
export default _default;
