/// <reference types="react" />
import { RegistrarIndex } from '@polkadot/types/interfaces/identity/types';
import { DisplayedJudgement } from '../types';
export interface DropdownOption {
    className?: string;
    key?: string;
    text: React.ReactNode;
    value: string;
}
export declare type DropdownOptions = DropdownOption[];
export declare type SortedJudgements = ({
    judgementName: DisplayedJudgement;
    registrarsIndexes: RegistrarIndex[];
})[];
