import { IconName } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
export interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
}
export interface ItemProps {
    children?: React.ReactNode;
    className?: string;
    icon?: IconName;
    isDisabled?: boolean;
    label?: React.ReactNode;
    onClick?: () => void | Promise<void> | null;
}
export interface BaseProps {
    children?: React.ReactNode;
    className?: string;
}
export interface DividerProps {
    className?: string;
}
