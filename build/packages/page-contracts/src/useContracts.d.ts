interface UseContracts {
    allContracts: string[];
    hasContracts: boolean;
    isContract: (address: string) => boolean;
}
export declare const useContracts: () => UseContracts;
export {};
