/// <reference types="bn.js" />
import type { DeriveElectionsInfo } from '@polkadot/api-derive/types';
import type { SetIndex } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';
export interface ComponentProps {
    electionsInfo?: DeriveElectionsInfo;
}
export interface VoterPosition {
    setIndex: SetIndex;
    globalIndex: BN;
}
