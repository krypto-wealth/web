/// <reference types="bn.js" />
import type { DeriveSociety } from '@polkadot/api-derive/types';
import type { BN } from '@polkadot/util';
import type { MapMember } from '../types';
import React from 'react';
interface Props {
    className?: string;
    info?: DeriveSociety;
    isMember: boolean;
    mapMembers?: MapMember[];
    ownMembers: string[];
    payoutTotal?: BN;
}
declare function Overview({ className, info, isMember, mapMembers, ownMembers, payoutTotal }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Overview, any, {}, never>>;
export default _default;
