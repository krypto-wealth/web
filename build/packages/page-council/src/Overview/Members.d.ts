import type { DeriveElectionsInfo } from '@polkadot/api-derive/types';
import type { AccountId } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    allVotes?: Record<string, AccountId[]>;
    className?: string;
    electionsInfo?: DeriveElectionsInfo;
    hasElections: boolean;
    prime?: AccountId | null;
}
declare function Members({ allVotes, className, electionsInfo, hasElections, prime }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Members>;
export default _default;