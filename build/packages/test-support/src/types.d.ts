import { DeriveBalancesAll, DeriveStakingAccount } from '@polkadot/api-derive/types';
import { UseAccountInfo } from '@polkadot/react-hooks/types';
import { KeyringJson$Meta } from '@polkadot/ui-keyring/types';
export declare type Override<T> = {
    [P in keyof T]?: T[P];
};
export interface AccountOverrides {
    meta?: Override<KeyringJson$Meta>;
    balance?: Override<DeriveBalancesAll>;
    staking?: Override<DeriveStakingAccount>;
    info?: Override<UseAccountInfo>;
}
