import type { SubmittableExtrinsicFunction } from '@polkadot/api/types';
import type { Call } from '@polkadot/types/interfaces';
import type { HexString } from '@polkadot/util/types';
export interface DecodedExtrinsic {
    call: Call;
    hex: HexString;
    fn: SubmittableExtrinsicFunction<'promise'>;
}
