import type { EventRecord } from '@polkadot/types/interfaces';
import type { Codec } from '@polkadot/types/types';
import type { EventCheck } from './useEventTrigger';
export interface Changes<T extends Codec> {
    added?: T[];
    removed?: T[];
}
export declare function useEventChanges<T extends Codec>(checks: EventCheck[], filter: (records: EventRecord[]) => Changes<T>, startValue?: T[]): T[];
