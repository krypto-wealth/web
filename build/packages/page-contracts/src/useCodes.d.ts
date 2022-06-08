import type { CodeStored } from './types';
interface UseCodes {
    allCodes: CodeStored[];
    codeTrigger: number;
}
export declare const useCodes: () => UseCodes;
export {};
