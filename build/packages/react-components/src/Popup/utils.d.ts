import type { ElementPosition } from '@polkadot/react-hooks/useElementPosition';
import { WindowSize } from '@polkadot/react-hooks/useWindowSize';
import { HorizontalPosition, VerticalPosition } from './types';
export declare function getPosition(triggerPosition: ElementPosition, positionX: HorizontalPosition, positionY: VerticalPosition, windowPosition: ElementPosition, scrollY: number, windowSize: WindowSize): {
    x: number;
    y: number;
};
