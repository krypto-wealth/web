/// <reference types="bn.js" />
import type { Inflation } from '@polkadot/react-hooks/types';
import type { u32 } from '@polkadot/types';
import type { AccountId, Balance, BlockNumber, EraIndex, Exposure, Hash, SessionIndex, ValidatorPrefs, ValidatorPrefsTo196 } from '@polkadot/types/interfaces';
import type { PalletNominationPoolsPoolMember } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
export declare type Nominators = Record<string, string[]>;
export declare type AccountFilter = 'all' | 'controller' | 'session' | 'stash' | 'unbonded';
export declare type ValidatorFilter = 'all' | 'hasNominators' | 'noNominators' | 'hasWarnings' | 'noWarnings' | 'iNominated' | 'nextSet';
export interface NominatedBy {
    index: number;
    nominatorId: string;
    submittedIn: EraIndex;
}
export declare type NominatedByMap = Record<string, NominatedBy[]>;
export interface Slash {
    accountId: AccountId;
    amount: Balance;
}
export interface SessionRewards {
    blockHash: Hash;
    blockNumber: BlockNumber;
    isEventsEmpty: boolean;
    parentHash: Hash;
    reward: Balance;
    sessionIndex: SessionIndex;
    slashes: Slash[];
    treasury: Balance;
}
interface ValidatorInfoRank {
    rankBondOther: number;
    rankBondOwn: number;
    rankBondTotal: number;
    rankNumNominators: number;
    rankOverall: number;
    rankReward: number;
}
export interface ValidatorInfo extends ValidatorInfoRank {
    accountId: AccountId;
    bondOther: BN;
    bondOwn: BN;
    bondShare: number;
    bondTotal: BN;
    commissionPer: number;
    exposure: Exposure;
    isActive: boolean;
    isBlocking: boolean;
    isElected: boolean;
    isFavorite: boolean;
    isNominating: boolean;
    key: string;
    knownLength: BN;
    lastPayout?: BN;
    minNominated: BN;
    numNominators: number;
    numRecentPayouts: number;
    skipRewards: boolean;
    stakedReturn: number;
    stakedReturnCmp: number;
    validatorPrefs?: ValidatorPrefs | ValidatorPrefsTo196;
    withReturns?: boolean;
}
export declare type TargetSortBy = keyof ValidatorInfoRank;
export interface SortedTargets {
    avgStaked?: BN;
    counterForNominators?: BN;
    counterForValidators?: BN;
    electedIds?: string[];
    historyDepth?: BN;
    inflation: Inflation;
    lastEra?: BN;
    lowStaked?: BN;
    medianComm: number;
    maxNominatorsCount?: BN;
    maxValidatorsCount?: BN;
    minNominated: BN;
    minNominatorBond?: BN;
    minValidatorBond?: BN;
    nominators?: string[];
    nominateIds?: string[];
    totalStaked?: BN;
    totalIssuance?: BN;
    validators?: ValidatorInfo[];
    validatorIds?: string[];
    waitingIds?: string[];
}
export interface PoolAccounts {
    rewardId: string;
    stashId: string;
}
export interface OwnPoolBase {
    members: Record<string, PalletNominationPoolsPoolMember>;
    poolId: u32;
}
export interface OwnPool extends OwnPoolBase, PoolAccounts {
}
export {};