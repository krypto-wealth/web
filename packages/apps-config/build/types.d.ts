export interface TOptions {
    ns?: string;
    replace?: Record<string, string>;
}
export declare type TFunction = (keyOrText: string, text?: string, options?: TOptions) => string;
