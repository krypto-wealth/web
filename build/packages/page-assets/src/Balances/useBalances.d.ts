/// <reference types="bn.js" />
import type { PalletAssetsAssetAccount } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
interface AccountResult {
    accountId: string;
    account: PalletAssetsAssetAccount;
}
declare const _default: (id?: BN | null | undefined) => AccountResult[] | null;
export default _default;
