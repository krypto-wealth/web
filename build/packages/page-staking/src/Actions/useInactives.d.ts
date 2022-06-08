interface Inactives {
    nomsActive?: string[];
    nomsChilled?: string[];
    nomsInactive?: string[];
    nomsOver?: string[];
    nomsWaiting?: string[];
}
declare const _default: (stashId: string, nominees?: string[] | undefined) => Inactives;
export default _default;
