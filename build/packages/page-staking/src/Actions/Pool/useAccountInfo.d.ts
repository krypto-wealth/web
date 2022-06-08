/// <reference types="bn.js" />
import type { PalletNominationPoolsRewardPool } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
import type { AccountInfo } from './types';
declare const _default: (accountId: string, rewardPool: PalletNominationPoolsRewardPool, poolPoints: BN, rewardClaimable: BN) => AccountInfo | null | undefined;
export default _default;
