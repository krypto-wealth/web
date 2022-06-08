/// <reference types="bn.js" />
import type { VoteThreshold } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';
interface Result {
    changeAye: BN;
    changeNay: BN;
}
declare const _default: (threshold: VoteThreshold, votedAye: BN, votedNay: BN, votedTotal: BN) => Result;
export default _default;
