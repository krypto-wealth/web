import type { LinkOption } from '@polkadot/apps-config/endpoints/types';
export declare function getEndpoint(apiUrl?: string): LinkOption | null;
export declare const useEndpoint: (apiUrl?: string | undefined) => LinkOption | null;
