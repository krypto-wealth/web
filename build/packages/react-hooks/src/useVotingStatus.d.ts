/// <reference types="bn.js" />
import type { Votes } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';
interface State {
    hasFailed: boolean;
    hasPassed: boolean;
    isCloseable: boolean;
    isVoteable: boolean;
    remainingBlocks: BN | null;
}
export declare const useVotingStatus: (votes: Votes | null | undefined, numMembers: number, section: "council" | "membership" | "technicalCommittee") => State;
export {};
