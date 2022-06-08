/// <reference types="bn.js" />
import type { SubmittableExtrinsicFunction } from '@polkadot/api/types';
import type { BN } from '@polkadot/util';
import { DeriveBounties } from '@polkadot/api-derive/types';
interface BountyApiTxs {
    acceptCurator: SubmittableExtrinsicFunction<'promise'>;
    approveBounty: SubmittableExtrinsicFunction<'promise'>;
    awardBounty: SubmittableExtrinsicFunction<'promise'>;
    claimBounty: SubmittableExtrinsicFunction<'promise'>;
    closeBounty: SubmittableExtrinsicFunction<'promise'>;
    extendBountyExpiry: SubmittableExtrinsicFunction<'promise'>;
    proposeBounty: SubmittableExtrinsicFunction<'promise'>;
    proposeCurator: SubmittableExtrinsicFunction<'promise'>;
    unassignCurator: SubmittableExtrinsicFunction<'promise'>;
}
interface BountyApiConstants {
    bountyCuratorDeposit: BN;
    bountyDepositBase: BN;
    bountyUpdatePeriod?: BN;
    bountyValueMinimum: BN;
    dataDepositPerByte: BN;
    maximumReasonLength: number;
}
interface BountyApiStatics extends BountyApiConstants, BountyApiTxs {
}
export interface BountyApi extends BountyApiStatics {
    bestNumber?: BN;
    bounties?: DeriveBounties;
    bountyCount?: BN;
    childCount?: BN;
}
export declare const useBounties: () => BountyApi;
export {};
