/// <reference types="bn.js" />
import type { AccountId, GroupIndex, ParaId } from '@polkadot/types/interfaces';
import type { LeasePeriod, QueuedAction } from '../types';
import type { EventMapInfo, ValidatorInfo } from './types';
import React from 'react';
import { BN } from '@polkadot/util';
interface Props {
    bestNumber?: BN;
    className?: string;
    id: ParaId;
    isScheduled?: boolean;
    lastBacked?: EventMapInfo;
    lastInclusion?: EventMapInfo;
    lastTimeout?: EventMapInfo;
    leasePeriod?: LeasePeriod;
    nextAction?: QueuedAction;
    sessionValidators?: AccountId[] | null;
    validators?: [GroupIndex, ValidatorInfo[]];
}
declare function Parachain({ bestNumber, className, id, lastBacked, lastInclusion, lastTimeout, leasePeriod, nextAction, sessionValidators, validators }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Parachain, any, {}, never>>;
export default _default;
