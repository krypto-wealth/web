import type { EventMapInfo } from './types';
declare type EventMap = Record<string, EventMapInfo>;
interface Result {
    lastBacked: EventMap;
    lastIncluded: EventMap;
    lastTimeout: EventMap;
}
declare const _default: () => Result;
export default _default;
