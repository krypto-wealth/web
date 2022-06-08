import type { LabelProps, SemanticShorthandItem } from 'semantic-ui-react';
export declare type LogType = 'error' | 'log';
export interface Log {
    args: unknown[];
    type: LogType;
}
export interface Snippet {
    text: string;
    value: string;
    code: string;
    label?: SemanticShorthandItem<LabelProps>;
    type?: 'custom' | 'shared';
}
