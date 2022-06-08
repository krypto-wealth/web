/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import { FormField } from './useFormField';
export declare const useNonZeroBn: (initialValue?: number | BN | undefined) => FormField<BN>;
