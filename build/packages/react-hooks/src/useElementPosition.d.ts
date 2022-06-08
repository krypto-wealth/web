import React from 'react';
export interface ElementPosition {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare const useElementPosition: (ref: React.MutableRefObject<HTMLElement | null | undefined>) => ElementPosition | undefined;
