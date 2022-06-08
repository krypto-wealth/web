import type { DeriveElectionsInfo } from '@polkadot/api-derive/types';
import type { BlockNumber } from '@polkadot/types/interfaces';
import type { ComponentProps } from './types';
import React from 'react';
interface Props extends ComponentProps {
    bestNumber?: BlockNumber;
    className?: string;
    electionsInfo?: DeriveElectionsInfo;
    hasElections: boolean;
}
declare function Summary({ bestNumber, className, electionsInfo, hasElections }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Summary>;
export default _default;
