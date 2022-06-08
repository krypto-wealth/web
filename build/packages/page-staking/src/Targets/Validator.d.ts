/// <reference types="bn.js" />
import type { UnappliedSlash } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';
import type { NominatedBy, ValidatorInfo } from '../types';
import React from 'react';
interface Props {
    allSlashes?: [BN, UnappliedSlash[]][];
    canSelect: boolean;
    filterName: string;
    info: ValidatorInfo;
    isNominated: boolean;
    isSelected: boolean;
    nominatedBy?: NominatedBy[];
    toggleFavorite: (accountId: string) => void;
    toggleSelected: (accountId: string) => void;
}
declare function Validator({ allSlashes, canSelect, filterName, info, isNominated, isSelected, nominatedBy, toggleFavorite, toggleSelected }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Validator>;
export default _default;
