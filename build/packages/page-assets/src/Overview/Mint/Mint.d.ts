/// <reference types="bn.js" />
import type { PalletAssetsAssetDetails, PalletAssetsAssetMetadata } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    className?: string;
    details: PalletAssetsAssetDetails;
    id: BN;
    metadata: PalletAssetsAssetMetadata;
    onClose: () => void;
}
declare function Mint({ className, details: { issuer, minBalance }, id, metadata, onClose }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Mint>;
export default _default;
