import type { KeyedEvent } from './types';
import React from 'react';
interface Events {
    eventCount: number;
    events: KeyedEvent[];
}
interface Props {
    children: React.ReactNode;
}
declare const EventsContext: React.Context<Events>;
declare function EventsBase({ children }: Props): React.ReactElement<Props>;
declare const Events: React.MemoExoticComponent<typeof EventsBase>;
export { EventsContext, Events };
