export declare function createNamedHook<F extends (...args: any[]) => any>(name: string, fn: F): (...args: Parameters<F>) => ReturnType<F>;
