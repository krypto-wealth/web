import type { ProviderStats } from '@polkadot/rpc-provider/types';
export interface Stats {
    stats: ProviderStats;
    when: number;
}
