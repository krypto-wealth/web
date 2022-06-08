export interface UseAccounts {
    allAccounts: string[];
    allAccountsHex: string[];
    areAccountsLoaded: boolean;
    hasAccounts: boolean;
    isAccount: (address?: string | null) => boolean;
}
export declare const useAccounts: () => UseAccounts;
