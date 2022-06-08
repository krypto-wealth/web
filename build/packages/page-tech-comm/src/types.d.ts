import type { AccountId, Hash } from '@polkadot/types/interfaces';
export interface ComponentProps {
    className?: string;
    isMember: boolean;
    prime?: AccountId | null;
    proposalHashes?: Hash[];
    members: string[];
    type: 'membership' | 'technicalCommittee';
}
