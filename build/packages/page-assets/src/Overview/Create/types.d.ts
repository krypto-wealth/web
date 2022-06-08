/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
export interface InfoState {
    accountId: string;
    assetDecimals: BN;
    assetId: BN;
    assetName: string;
    assetSymbol: string;
    minBalance: BN;
}
export interface TeamState {
    adminId: string;
    issuerId: string;
    freezerId: string;
}
