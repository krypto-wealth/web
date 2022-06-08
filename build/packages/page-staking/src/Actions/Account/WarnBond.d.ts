/// <reference types="bn.js" />
import type { DeriveStakingAccount } from '@polkadot/api-derive/types';
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    minBond?: BN;
    stakingInfo?: DeriveStakingAccount;
}
declare function WarnBond({ minBond, stakingInfo }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof WarnBond>;
export default _default;
