/// <reference types="bn.js" />
import type { PalletAssetsAssetDetails, PalletAssetsAssetMetadata } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
export interface AssetInfo {
    details: PalletAssetsAssetDetails | null;
    id: BN;
    isAdminMe: boolean;
    isIssuerMe: boolean;
    isFreezerMe: boolean;
    isOwnerMe: boolean;
    key: string;
    metadata: PalletAssetsAssetMetadata | null;
}
export interface AssetInfoComplete extends AssetInfo {
    details: PalletAssetsAssetDetails;
    metadata: PalletAssetsAssetMetadata;
}
