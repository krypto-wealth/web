/// <reference types="bn.js" />
import type { PalletStakingUnappliedSlash } from '@polkadot/types/lookup';
import { BN } from '@polkadot/util';
export declare const useAvailableSlashes: () => [BN, PalletStakingUnappliedSlash[]][];
