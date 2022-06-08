import type { AccountId, ParaId } from '@polkadot/types/interfaces';
import type { PolkadotRuntimeParachainsParasParaLifecycle } from '@polkadot/types/lookup';
interface Result {
    headHex: string | null;
    lifecycle: PolkadotRuntimeParachainsParasParaLifecycle | null;
    manager: AccountId | null;
}
declare const _default: (id: ParaId) => Result;
export default _default;
