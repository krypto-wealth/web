import type { Params } from './types';
import React from 'react';
interface Props {
    className?: string;
    isDisabled?: boolean;
    ownAccounts?: string[];
    params: Params;
}
declare function Create({ className, isDisabled, ownAccounts, params: { minCreateBond, minNominatorBond, nextPoolId } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Create>;
export default _default;
