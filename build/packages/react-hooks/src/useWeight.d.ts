/// <reference types="bn.js" />
import type { Call } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';
export declare const useWeight: (call?: Call | null | undefined) => [BN, number];
