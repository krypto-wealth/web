/// <reference types="bn.js" />
import type { DeriveStakingAccount } from '@polkadot/api-derive/types';
import type { BN } from '@polkadot/util';
import React from 'react';
interface DeriveStakingAccountPartial {
    controllerId: DeriveStakingAccount['controllerId'] | string;
    stashId: DeriveStakingAccount['stashId'] | string;
    redeemable?: BN;
}
interface Props {
    className?: string;
    isPool?: boolean;
    stakingInfo?: DeriveStakingAccountPartial;
}
declare function StakingRedeemable({ className, isPool, stakingInfo }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof StakingRedeemable>;
export default _default;
