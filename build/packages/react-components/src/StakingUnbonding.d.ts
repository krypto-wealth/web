/// <reference types="bn.js" />
import type { DeriveStakingAccount } from '@polkadot/api-derive/types';
import React from 'react';
import { BN } from '@polkadot/util';
interface Unlocking {
    remainingEras: BN;
    value: BN;
}
interface DeriveStakingAccountPartial {
    accountId: DeriveStakingAccount['accountId'] | string;
    unlocking?: Unlocking[];
}
interface Props {
    iconPosition: 'left' | 'right';
    className?: string;
    stakingInfo?: DeriveStakingAccountPartial;
}
declare function StakingUnbonding({ className, iconPosition, stakingInfo }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof StakingUnbonding, any, {}, never>>;
export default _default;
