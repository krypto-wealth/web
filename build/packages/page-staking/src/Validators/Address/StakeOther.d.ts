/// <reference types="bn.js" />
import type { NominatorValue } from './types';
import React from 'react';
import { BN } from '@polkadot/util';
interface Props {
    stakeOther?: BN;
    nominators: NominatorValue[];
}
declare function StakeOther({ nominators, stakeOther }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof StakeOther>;
export default _default;
