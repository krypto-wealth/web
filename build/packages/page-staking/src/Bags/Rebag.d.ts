/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    bagLower: BN;
    bagUpper: BN;
    stashIds: string[];
}
declare function Rebag({ bagUpper, stashIds }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Rebag>;
export default _default;
