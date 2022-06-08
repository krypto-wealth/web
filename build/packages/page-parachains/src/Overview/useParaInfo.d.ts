import type { BlockNumber, CandidatePendingAvailability, ParaId } from '@polkadot/types/interfaces';
import type { PolkadotRuntimeCommonParasRegistrarParaInfo, PolkadotRuntimeParachainsParasParaLifecycle } from '@polkadot/types/lookup';
interface Result {
    headHex: string | null;
    leases: number[];
    lifecycle: PolkadotRuntimeParachainsParasParaLifecycle | null;
    paraInfo: PolkadotRuntimeCommonParasRegistrarParaInfo | null;
    pendingAvail: CandidatePendingAvailability | null;
    updateAt: BlockNumber | null;
    qDmp: number;
    qUmp: number;
    qHrmpE: number;
    qHrmpI: number;
    watermark: BlockNumber | null;
}
declare const _default: (id: ParaId) => Result;
export default _default;
