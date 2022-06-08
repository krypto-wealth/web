/// <reference types="bn.js" />
import type { AccountId } from '@polkadot/types/interfaces';
import type { PalletUniquesCollectionDetails, PalletUniquesCollectionMetadata } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
export interface CollectionSupportedIpfsData {
    name: string | null;
    image: string | null;
}
export interface CollectionInfo {
    details: PalletUniquesCollectionDetails | null;
    id: BN;
    isAdminMe: boolean;
    isIssuerMe: boolean;
    isFreezerMe: boolean;
    isOwnerMe: boolean;
    key: string;
    metadata: PalletUniquesCollectionMetadata | null;
    ipfsData: CollectionSupportedIpfsData | null;
}
export interface CollectionInfoComplete extends CollectionInfo {
    details: PalletUniquesCollectionDetails;
    metadata: PalletUniquesCollectionMetadata;
}
export interface AccountItem {
    accountId: AccountId;
    collectionId: BN;
    itemId: BN;
}
