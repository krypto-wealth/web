import { ApiPromise } from '@polkadot/api';
import { BountyIndex, BountyStatus } from '@polkadot/types/interfaces';
import { PalletBountiesBounty } from '@polkadot/types/lookup';
export declare class BountyFactory {
    #private;
    constructor(api: ApiPromise);
    aBountyIndex: (index?: number) => BountyIndex;
    defaultBounty: () => PalletBountiesBounty;
    aBountyStatus: (status: string) => BountyStatus;
    bountyStatusWith: ({ curator, status, updateDue }?: {
        curator?: string | undefined;
        status?: string | undefined;
        updateDue?: number | undefined;
    }) => BountyStatus;
    bountyWith: ({ status, value }?: {
        status?: string | undefined;
        value?: number | undefined;
    }) => PalletBountiesBounty;
    aBounty: ({ fee, status, value }?: Partial<PalletBountiesBounty>) => PalletBountiesBounty;
}
