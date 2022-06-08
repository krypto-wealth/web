import { Page } from '@polkadot/test-support/pages/Page';
import { Sidebar } from '@polkadot/test-support/pagesElements/Sidebar';
import { AccountOverrides } from '@polkadot/test-support/types';
import { AccountRow } from '../pageElements/AccountRow';
export declare class AccountsPage extends Page {
    constructor();
    getAccountRows(): Promise<AccountRow[]>;
    reverseSortingOrder(): Promise<void>;
    sortBy(category: string): Promise<void>;
    getCurrentSortCategory(): Promise<HTMLElement>;
    enterCreateAccountModal(): Promise<void>;
    renderAccountsWithDefaultAddresses(...overrides: AccountOverrides[]): void;
    renderAccountsForAddresses(...addresses: string[]): void;
    renderDefaultAccounts(accountsNumber: number): void;
    openSidebarForRow(accountRowIndex: number): Promise<Sidebar>;
    private getSortCategory;
    private getSortByComponent;
}
