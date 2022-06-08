import { Page } from '@polkadot/test-support/pages/Page';
import { Row } from '@polkadot/test-support/pagesElements';
import { AccountOverrides as ContactOverrides } from '@polkadot/test-support/types';
export declare class AddressesPage extends Page {
    constructor();
    getAddressesRows(): Promise<Row[]>;
    renderDefaultContacts(contactsNumber: number): void;
    renderContactsWithDefaultAddresses(...overrides: ContactOverrides[]): void;
    renderContactsForAddresses(...addresses: string[]): void;
    renderContacts(contacts: [string, ContactOverrides][]): void;
}
