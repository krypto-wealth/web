import React from 'react';
export declare type HorizontalPosition = 'left' | 'middle' | 'right';
export declare type VerticalPosition = 'top' | 'bottom';
export interface PopupWindowProps {
    className?: string;
    children?: React.ReactNode;
    windowRef: React.RefObject<HTMLDivElement>;
    triggerRef: React.RefObject<HTMLDivElement>;
    position: HorizontalPosition;
}
export interface PopupProps {
    isDisabled?: boolean;
    className?: string;
    closeOnScroll?: boolean;
    value?: React.ReactNode;
    children?: React.ReactNode;
    position?: HorizontalPosition;
    onCloseAction?: () => void;
}
