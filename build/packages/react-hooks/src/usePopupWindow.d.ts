import React from 'react';
import { HorizontalPosition, VerticalPosition } from '@polkadot/react-components/Popup/types';
interface Coord {
    x: number;
    y: number;
}
interface Result {
    renderWindowPosition?: Coord;
    verticalPosition: VerticalPosition | undefined;
}
export declare const usePopupWindow: (windowRef: React.RefObject<HTMLDivElement>, triggerRef: React.RefObject<HTMLDivElement>, position: HorizontalPosition) => Result;
export {};
