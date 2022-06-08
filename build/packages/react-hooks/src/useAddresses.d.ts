interface UseAddresses {
    allAddresses: string[];
    hasAddresses: boolean;
    isAddress: (address: string) => boolean;
}
export declare const useAddresses: () => UseAddresses;
export {};
