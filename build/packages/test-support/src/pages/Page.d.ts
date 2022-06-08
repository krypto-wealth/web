import React from 'react';
import { Table } from '../pagesElements';
import { AccountOverrides } from '../utils/accountDefaults';
export declare abstract class Page {
    private readonly overview;
    private readonly rowClassName;
    private renderResult?;
    protected readonly defaultAddresses: string[];
    protected constructor(overview: React.ReactElement, rowClassName: string);
    render(accounts: [string, AccountOverrides][]): void;
    getTable(): Promise<Table>;
    clearAccounts(): void;
    getById(id: string | RegExp): HTMLElement | null;
    protected assertRendered(): void;
}
