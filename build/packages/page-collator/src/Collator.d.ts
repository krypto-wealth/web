import type { Collator as CollatorType } from './types';
import React from 'react';
interface Props {
    className?: string;
    info: CollatorType;
    lastBlock?: string;
}
declare function Collator({ className, info: { accountId, deposit, isInvulnerable, lastBlock: lastStateBlock }, lastBlock: lastGlobalBlock }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Collator>;
export default _default;
