/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import type { Inflation } from './types';
export declare const useInflation: (totalStaked?: BN | undefined) => Inflation;
