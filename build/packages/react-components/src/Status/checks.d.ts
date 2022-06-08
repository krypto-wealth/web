import type { DispatchError, EventRecord } from '@polkadot/types/interfaces';
export declare function getDispatchError(dispatchError: DispatchError): string;
export declare function getIncompleteMessage({ event }: EventRecord): string | null;
