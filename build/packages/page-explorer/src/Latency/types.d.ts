import type { Hash } from '@polkadot/types/interfaces';
export interface Detail {
    block: {
        bytes: number;
        number: number;
    };
    delay: number;
    events: {
        count: number;
        system: number;
    };
    extrinsics: {
        bytes: number;
        count: number;
    };
    now: number;
    parentHash: Hash;
}
export interface Result {
    details: Detail[];
    stdDev: number;
    timeAvg: number;
    timeMax: number;
    timeMin: number;
}
export interface ChartContents {
    labels: string[];
    values: number[][];
}