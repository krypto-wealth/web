import { Sidebar } from '@polkadot/test-support/pagesElements/Sidebar';
import { Balance } from '@polkadot/types/interfaces';
export declare class Row {
    primaryRow: HTMLElement;
    detailsRow: HTMLElement;
    constructor(primaryRow: HTMLElement, detailsRow: HTMLElement);
    assertBalancesTotal(expectedTotalBalance: Balance): Promise<void>;
    getBalanceSummary(): Promise<HTMLElement>;
    assertAccountName(expectedName: string): Promise<void>;
    assertBalancesDetails(expectedBalanceComponents: {
        name: string;
        amount: Balance;
    }[]): Promise<void>;
    assertBadge(expectedBadgeName: string): Promise<void>;
    assertNoBadge(badgeName: string): void;
    assertTags(expectedTagsContent: string): Promise<void>;
    assertShortAddress(expectedShortAddress: string): Promise<void>;
    expand(): Promise<void>;
    getBadge(expectedBadgeName: string): Promise<HTMLElement>;
    openSidebar(): Promise<Sidebar>;
    private assertBalanceComponent;
    private getBalanceElementByLabelName;
    private getAccountName;
}
