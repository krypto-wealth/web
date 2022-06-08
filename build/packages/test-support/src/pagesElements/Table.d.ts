import { Row } from './Row';
export declare class Table {
    private readonly table;
    private readonly rowClassName;
    constructor(table: HTMLElement, rowClassName: string);
    assertRowsOrder(balancesExpectedOrder: number[]): Promise<void>;
    getRows(): Promise<Row[]>;
    assertColumnNotExist(columnName: string): void;
    assertColumnExists(columnName: string): void;
    assertText(text: string): Promise<HTMLElement>;
    private getFilteredHtmlRows;
    private getAllHtmlRows;
}
