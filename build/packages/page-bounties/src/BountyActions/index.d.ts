/// <reference types="react" />
/// <reference types="bn.js" />
import type { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import type { Balance, BlockNumber, BountyIndex, BountyStatus } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';
interface Props {
    bestNumber: BlockNumber;
    description: string;
    fee?: BN;
    index: BountyIndex;
    proposals?: DeriveCollectiveProposal[];
    status: BountyStatus;
    value: Balance;
}
export declare function BountyActions({ bestNumber, description, fee, index, proposals, status, value }: Props): JSX.Element;
export {};
