/// <reference types="bn.js" />
import type { DeriveBalancesAll, DeriveStakingAccount } from '@polkadot/api-derive/types';
import type { UseAccountInfo } from '@polkadot/react-hooks/types';
import { UseAccounts } from '@polkadot/react-hooks/useAccounts';
import { KeyringJson$Meta } from '@polkadot/ui-keyring/types';
import { BN } from '@polkadot/util';
export interface Account {
    balance: DeriveBalancesAll;
    info: UseAccountInfo;
    staking: DeriveStakingAccount;
}
export declare type AccountsMap = {
    [address: string]: Account;
};
export declare type Override<T> = {
    [P in keyof T]?: T[P];
};
/**
 * Test inputs structure
 */
export interface AccountOverrides {
    meta?: Override<KeyringJson$Meta>;
    balance?: Override<DeriveBalancesAll>;
    staking?: Override<DeriveStakingAccount>;
    info?: Override<UseAccountInfo>;
}
export declare const emptyAccounts: UseAccounts;
export declare const defaultBalanceAccount: DeriveBalancesAll;
export declare const defaultStakingAccount: DeriveStakingAccount;
export declare const defaultMeta: KeyringJson$Meta;
export declare const defaultAccountInfo: UseAccountInfo;
declare class MockAccountHooks {
    useAccounts: UseAccounts;
    accountsMap: AccountsMap;
    nonce: BN;
    setAccounts(accounts: [string, AccountOverrides][]): void;
}
export declare const mockAccountHooks: MockAccountHooks;
export {};
