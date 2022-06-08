/// <reference types="bn.js" />
import type { BlockNumber, OpenTipTo225 } from '@polkadot/types/interfaces';
import type { PalletTipsOpenTip } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    bestNumber?: BlockNumber;
    className?: string;
    defaultId: string | null;
    hash: string;
    isMember: boolean;
    members: string[];
    onSelect: (hash: string, isSelected: boolean, value: BN) => void;
    onlyUntipped: boolean;
    tip: PalletTipsOpenTip | OpenTipTo225;
}
declare function Tip({ bestNumber, className, defaultId, hash, isMember, members, onSelect, onlyUntipped, tip }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Tip, any, {}, never>>;
export default _default;
