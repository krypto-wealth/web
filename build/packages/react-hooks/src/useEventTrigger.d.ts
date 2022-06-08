import type { AugmentedEvent } from '@polkadot/api/types';
import type { EventRecord } from '@polkadot/types/interfaces';
export declare type EventCheck = AugmentedEvent<'promise'> | false | undefined | null;
interface Result {
    blockHash: string;
    events: EventRecord[];
}
export declare const useEventTrigger: (_checks: EventCheck[], filter?: ((record: EventRecord) => boolean) | undefined) => Result;
export {};
