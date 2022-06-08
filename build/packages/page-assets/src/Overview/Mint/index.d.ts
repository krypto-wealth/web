/// <reference types="bn.js" />
import type { PalletAssetsAssetDetails, PalletAssetsAssetMetadata } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    className?: string;
    details: PalletAssetsAssetDetails;
    id: BN;
    metadata: PalletAssetsAssetMetadata;
}
declare function Mint({ className, details, id, metadata }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Mint>;
export default _default;
