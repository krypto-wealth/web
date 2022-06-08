import { ApiPromise } from '@polkadot/api';
import { KeyringPair } from '@polkadot/keyring/types';
export declare function multiProposeBounty(api: ApiPromise, numberOfBounties: number, signer: KeyringPair): Promise<number[]>;
export declare function multiApproveBounty(api: ApiPromise, bountyIndexes: number[], signer: KeyringPair): Promise<void>;
export declare function multiWaitForBountyFunded(api: ApiPromise, bountyIndexes: number[]): Promise<void>;
export declare function multiProposeCurator(api: ApiPromise, bountyIndexes: number[], signer: KeyringPair): Promise<void>;
export declare function multiAcceptCurator(api: ApiPromise, bountyIndexes: number[], signer: KeyringPair): Promise<void>;
export declare function multiAwardBounty(api: ApiPromise, bountyIndexes: number[], signer: KeyringPair): Promise<void>;
export declare function multiWaitForClaim(api: ApiPromise, bountyIndexes: number[]): Promise<void>;
export declare function multiClaimBounty(api: ApiPromise, bountyIndexes: number[], signer: KeyringPair): Promise<void>;