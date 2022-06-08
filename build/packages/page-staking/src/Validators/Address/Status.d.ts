/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    isChilled?: boolean;
    isElected: boolean;
    isMain?: boolean;
    isPara?: boolean;
    isRelay?: boolean;
    nominators?: {
        nominatorId: string;
    }[];
    onlineCount?: false | BN;
    onlineMessage?: boolean;
}
declare function Status({ isChilled, isElected, isMain, isPara, isRelay, nominators, onlineCount, onlineMessage }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Status>;
export default _default;
