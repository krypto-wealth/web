import { DeriveBalancesAll, DeriveStakingAccount } from '@polkadot/api-derive/types';
import { UseAccountInfo } from '@polkadot/react-hooks/types';
import { KeyringJson$Meta } from '@polkadot/ui-keyring/types';
import { AccountOverrides as ContactOverrides, Override } from '../types';
export declare const aContact: () => ContactOverrides;
export declare const aContactWithBalance: (balance: Override<DeriveBalancesAll>) => ContactOverrides;
export declare const aContactWithInfo: (info: Override<UseAccountInfo>) => ContactOverrides;
export declare const aContactWithStaking: (staking: Override<DeriveStakingAccount>) => ContactOverrides;
export declare const aContactWithMeta: (meta: Override<KeyringJson$Meta>) => ContactOverrides;
