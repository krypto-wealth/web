import { Row } from '@polkadot/test-support/pagesElements/Row';
export declare class AccountRow extends Row {
    assertParentAccountName(expectedParentAccount: string): Promise<void>;
}
