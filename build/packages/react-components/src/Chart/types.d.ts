/// <reference types="bn.js" />
/// <reference types="react" />
import type { BN } from '@polkadot/util';
import ChartJs from 'chart.js';
export interface DoughnutValue {
    colors: string[];
    label: string;
    value: number | BN;
}
export interface HorizBarValue {
    colors: string[];
    label: string;
    tooltip?: string;
    value: number | BN;
}
export interface BaseProps {
    children: React.ReactNode;
    className?: string;
}
export interface DoughnutProps {
    className?: string;
    size?: number;
    values: DoughnutValue[];
}
export interface HorizBarProps {
    aspectRatio?: number;
    className?: string;
    max?: number;
    showLabels?: boolean;
    values: HorizBarValue[];
    withColors?: boolean;
}
export interface LineProps {
    colors?: (string | undefined)[];
    className?: string;
    labels: string[];
    legends: string[];
    options?: ChartJs.ChartOptions;
    values: (number | BN)[][];
}
