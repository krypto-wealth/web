import type { MetadataDef } from '@polkadot/extension-inject/types';
export declare type ChainType = 'substrate' | 'ethereum';
export interface ChainInfo extends MetadataDef {
    color: string | undefined;
    chainType: ChainType;
}
