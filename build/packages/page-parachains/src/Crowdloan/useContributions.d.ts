import type { DeriveContributions } from '@polkadot/api-derive/types';
import type { Balance, ParaId } from '@polkadot/types/interfaces';
interface Result extends DeriveContributions {
    hasLoaded: boolean;
    myAccounts: string[];
    myAccountsHex: string[];
    myContributions: Record<string, Balance>;
}
declare const _default: (paraId: ParaId) => Result;
export default _default;
