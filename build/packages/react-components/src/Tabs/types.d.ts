import type { IconName } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
export interface TabItem {
    alias?: string;
    count?: number;
    hasParams?: boolean;
    isExact?: boolean;
    isHidden?: boolean;
    isRoot?: boolean;
    name: string;
    text: React.ReactNode;
}
export interface SectionType {
    icon?: IconName;
    text?: string;
}
