/// <reference types="bn.js" />
import type { PalletNominationPoolsPoolMember } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
export interface AccountInfo {
    claimable: BN;
    member: PalletNominationPoolsPoolMember;
}
