import type { BlockNumber, ParaId, RuntimeVersion } from '@polkadot/types/interfaces';
interface Result {
    bestNumber?: BlockNumber;
    runtimeVersion?: RuntimeVersion;
}
declare const _default: (id: ParaId) => Result;
export default _default;
