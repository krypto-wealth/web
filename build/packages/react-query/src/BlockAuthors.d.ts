import type { HeaderExtended } from '@polkadot/api-derive/types';
import React from 'react';
export interface HeaderExtendedWithMapping extends HeaderExtended {
    authorFromMapping?: string;
}
export interface Authors {
    byAuthor: Record<string, string>;
    eraPoints: Record<string, string>;
    lastBlockAuthors: string[];
    lastBlockNumber?: string;
    lastHeader?: HeaderExtendedWithMapping;
    lastHeaders: HeaderExtendedWithMapping[];
}
interface Props {
    children: React.ReactNode;
}
declare const BlockAuthorsContext: React.Context<Authors>;
declare const ValidatorsContext: React.Context<string[]>;
declare function BlockAuthorsBase({ children }: Props): React.ReactElement<Props>;
declare const BlockAuthors: React.MemoExoticComponent<typeof BlockAuthorsBase>;
export { BlockAuthorsContext, BlockAuthors, ValidatorsContext };
