export declare class JudgementTag {
    judgementTag: HTMLElement;
    constructor(judgementTag: HTMLElement);
    assertRegistrars(expectedRegistrars: string[]): Promise<void>;
    clickRegistrar(registrarName: string): Promise<void>;
    private openPopup;
}
