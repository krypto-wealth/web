/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    defaultId: string | null;
    hash: string;
    isMember: boolean;
    isTipped: boolean;
    median: BN;
    members: string[];
    recipient: string;
}
declare function TipEndorse({ defaultId, hash, isMember, isTipped, median, members, recipient }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof TipEndorse>;
export default _default;
