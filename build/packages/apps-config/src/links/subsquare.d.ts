import type { BN } from '@polkadot/util';
declare const _default: {
    chains: {
        Acala: string;
        Bifrost: string;
        Karura: string;
        Khala: string;
        Kusama: string;
        kintsugi: string;
    };
    create: (chain: string, path: string, data: BN | number | string) => string;
    isActive: boolean;
    logo: string;
    paths: {
        bounty: string;
        council: string;
        external: string;
        proposal: string;
        referendum: string;
        tip: string;
        treasury: string;
    };
    url: string;
};
export default _default;
