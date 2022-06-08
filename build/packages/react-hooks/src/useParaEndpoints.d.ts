/// <reference types="bn.js" />
import type { LinkOption } from '@polkadot/apps-config/endpoints/types';
import type { BN } from '@polkadot/util';
export declare const useRelayEndpoints: () => LinkOption[];
export declare const useParaEndpoints: (paraId: number | BN) => LinkOption[];
export declare const useIsParasLinked: (ids?: (number | BN)[] | null | undefined) => Record<string, boolean>;
