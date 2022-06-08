/// <reference types="bn.js" />
import type { Proposal } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    className?: string;
    proposal?: Proposal | null;
    idNumber: BN | number | string;
    withLinks?: boolean;
    expandNested?: boolean;
}
declare function ProposedAction({ className, expandNested, idNumber, proposal, withLinks }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof ProposedAction, any, {}, never>>;
export default _default;
